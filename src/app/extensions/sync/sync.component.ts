import { HttpClientService } from './../../services/http-client.service';
import { Git } from './../git/init';
import { DB } from './../db/db';
import { Mkdir as Dir } from './dir';
import { AppState } from './../../store/appState.store';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { electron } from 'electron';
// import Redis = require('ioredis');
// import isOnline = require('is-online');
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

        return new Promise((resolve, reject) => {
            this.http.getFolders()
                .subscribe(res => {
                    setTimeout(() => {
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
                    }, 0);
                });
        });

    }
    download(uri: string, filename: string, callback: any) {
        //TODO set auth token on this download request 
        request.head(uri, function (err, res, body) {

            request(uri).pipe(fs.createWriteStream(os.homedir() + '/Sbox/' + filename)).on('close', callback);

        });

    }

    async ngOnInit() {
        await this.dir.create('Sbox').then((res) => {})
        .catch((err) => {
             //keep retrying until it succeed to create a folder.
             this.dir.create('Sbox');
        });
        await this.copyFolders().then((res) => { }).catch((error) => { });
        this.downloadFiles();

        this.download('http://localhost:8000/api/downloads/fileApi/3/0', 'name.png', function () {
            console.log('we have done downloading file');
        });

    }
    downloadFiles(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout((res) => {
                // let data = this.http.getFiles();
                // var tmp = [];
                // if (data.length > 5) {
                //     //TODO complent this method once I am in cool mood.
                // }
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


