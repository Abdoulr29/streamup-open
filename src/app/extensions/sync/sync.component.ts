import { HttpClientService } from './../../services/http-client.service';
import { Git } from './../git/init';
import { DB } from './../db/db';
import { Mkdir as Dir } from './dir';
import { AppState } from './../../store/appState.store';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import electron = require('electron');
let { ipcRenderer } = electron;
import Redis = require('ioredis');
import isOnline = require('is-online');
import request = require('request');
import fs = require('fs');
import os = require('os');

@Component({
    selector: 'sbox',
    styleUrls: ['./sync.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './sync.component.html',
    providers: [HttpClientService]
})

export class SyncComponent implements OnInit {
    isDarkTheme: boolean = false;
    db = new DB();
    dir = new Dir();
    constructor(private http: HttpClientService) {


    }
    copyFolders(): Promise<any> {
        console.log('here is called');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.http.getFolders()
                    .subscribe(res => {

                        res.forEach(folder => {
                            this.db.saveFolder(folder);
                            if (folder.parent === 0) {
                                if (folder.has_copy === 1) {
                                    this.createFolder(folder.name + '(' + folder.copy_count + ')');
                                } else if (folder.has_copy === 0) {
                                    this.createFolder(folder.name);
                                }
                            } else {
                                this.http.getPath(folder.id)
                                    .subscribe(response => {
                                        var tmp = [];
                                        response.forEach(subfolder => {
                                            tmp.push(subfolder.name);
                                        });
                                        this.createFolder(tmp.join('/'));
                                    });
                            }
                        });
                        resolve();

                    });
            }, 0);
        });

    }
    download(uri: string, filename: string, callback: any) {
        //TODO set auth token on this download request 
        request.head(uri, function (err, res, body) {

            request(uri).pipe(fs.createWriteStream(os.homedir() + '/Sbox/' + filename)).on('close', callback);


        });

    }


    
     ngOnInit() {

        this.dir.create('Sbox').then((res) => { })
            .catch((err) => {
               
                this.dir.create('Sbox');
            });
        this.copyFolders().then((res) => {  }).catch((error) => { });
        this.downloadFiles();

        // this.download('http://localhost:8000/api/downloads/fileApi/3/0', 'name.png', function () {
        //     console.log('we have done downloading file');
        // });

    }
    downloadFiles(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout((res) => {

            }, 0);
        });
    }
    isAutoSync(toggle?: boolean): boolean {
        return toggle = !toggle;

    }
    autoFetch() {


    }
    createFolder(name: String) {

        this.dir.create('Sbox/' + name);
        new Git().init('Sbox/' + name);

    }

}


