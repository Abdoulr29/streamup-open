import {
    Sync
} from "./Sync";
export class Rsync implements Sync {
    public path = require('path');
    public Rsync = require('rsync');
    public os = require('os');
    constructor() {

    }
    syncRemote() {
 
        var rsync = new this.Rsync()
            .flags('avr')
            .source(this.os.homedir() + "\\Sbox\\")
            .destination(this.os.homedir());

        rsync.execute(function (err: any, code: any, cmd: any) {
            //execute...
            console.log(cmd);
            console.log(code);
            console.log(err);
        });
    }
}