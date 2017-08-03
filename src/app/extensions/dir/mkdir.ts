var os = require('os');
var fs = require('fs');
import electron = require('electron');
export class Mkdir {

  public create(dir: string) {

    setTimeout((res) => {
        const newDir = os.homedir() + '/' + dir;
        fs.exists(newDir, function (params, status) {
            const newDir = os.homedir() + '/' + dir;
            
            fs.exists(newDir, function (params, status) {
           
            if (status !== true) {
                fs.mkdir(newDir, function (_, t) {});
                fs.chmod(newDir, '777', function (_, t) {

                });

            } else {
                fs.chmod(newDir, '777', function (_, t) {

                });
            }


            });
        });

    }, 0);

  }
}
