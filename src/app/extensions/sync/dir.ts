var os = require('os');
var fs = require('fs');
import electron = require('electron');
let { ipcRenderer } = electron;
export class Mkdir {

    constructor() {

    }
    public create(dir: string): Promise<any> {

        // os.homedir() + '/desktop' + dir;
        return new Promise((resolve, reject) => {
            setTimeout((res) => {
                let newDir = os.homedir() + '/' + dir;
                fs.exists(newDir, function (params, status) {


                    if (status !== true) {
                        fs.mkdir(newDir, function (_, t) { });
                        fs.chmod(newDir, '777', function (_, t) {

                        });

                    } else {
                        fs.chmod(newDir, '777', function (_, t) {

                        });
                    }

                });
            }, 0);
        });

    }
}

