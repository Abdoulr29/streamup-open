var os = require('os');
var fs = require('fs');
export class Mkdir {

  public create(dir: string) {

    setTimeout(() => {
        const newDir = os.homedir() + '/' + dir;
        fs.exists(newDir, function () {
            const newDir = os.homedir() + '/' + dir;
            
            fs.exists(newDir, function (params:any, status:any) {
                console.log(params);
            if (status !== true) {
                fs.mkdir(newDir, function () {});
                fs.chmod(newDir, '777', function () {

                });

            } else {
                fs.chmod(newDir, '777', function () {

                });
            }


            });
        });

    }, 0);

  }
}
