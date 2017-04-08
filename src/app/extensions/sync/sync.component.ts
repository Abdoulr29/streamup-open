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

            });

    }
    download(uri: string, filename: string, callback: any) {

        request.head(uri, function (err, res, body) {

            request(uri).pipe(fs.createWriteStream(os.homedir() + '/Sbox/' + filename)).on('close', callback);

        });

    }
    ngOnInit() {

        this.dir.create('Sbox');
        this.download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function () {

        });

        
        // isOnline().then(online => {
        //     if (!online) {
        //         new Redis().subscribe('folder-created');
        //         new Redis().on('message', function (channel, message) {
        //             console.log(message);
        //         });
        //     }
        // });

    }
    isAutoSync(direma: boolean) {
        return direma = !direma;
    }
    autoFetch() {


    }
    createFolder(name: String) {

        this.dir.create('Sbox/' + name);
        new Git().init('Sbox/' + name);

    }
    checkAuthentication() { }
}


