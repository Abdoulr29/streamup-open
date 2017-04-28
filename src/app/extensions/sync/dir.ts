var os = require('os');
var fs = require('fs');
import electron = require('electron');
let { ipcRenderer } = electron;
export class Mkdir {

    
    public create(dir: string): Promise<any> {
        

        // os.homedir() + '/desktop' + dir;
        return new Promise((resolve, reject) => {
            setTimeout((res) => {
                let newDir = os.homedir() + '/' + dir;
                fs.exists(newDir, function (params, status) {

<<<<<<< HEAD
        let newDir = os.homedir() + '/' + dir;
        // os.homedir() + '/desktop' + dir;
        fs.exists(newDir, function (params, status) {
            // if (process.platform = 'linux') {

            if (status !== true) {
                fs.mkdir(newDir, function (_, t) { });
                fs.chmod(newDir, '777', function (_, t) {

                });

            } else {
                fs.chmod(newDir, '777', function (_, t) {

                });
            }
            // } else if (process.platform = 'win32') {
            //     //please implement this here the logic 
            // }
=======
                    if (status !== true) {
                        fs.mkdir(newDir, function (_, t) { });
                        fs.chmod(newDir, '777', function (_, t) {

                        });

                    } else {
                        fs.chmod(newDir, '777', function (_, t) {

                        });
                    }
>>>>>>> 7fda63211fc401b1119c600388380c11db5f4fe4

                });
            }, 0);
        });

    }
}

