export class synchronization {
    public path = require('path');
    public Rsync = require('rsync');
    public os = require('os');
    public robocopy = require('robocopy');
    public source: string;
    public destination: string;


    constructor(destination: string) {

        if (this.os.platform() === 'win32') {
            // sync with robocopy will execute on win32
            this.destination = destination;
            this.robocopy({
                // Specifies the path to the source directory. 
                source: this.os.homedir() + '\\Sbox\\',

                // Specifies the destination path(s). 

                destination: destination,

                // Indicates if multiple destinations should be copied serialy. By default  
                // multiple destinations are copied in parallel. 
                serial: false,

                // Specifies the file or files to be copied. You can use wildcard characters (* or ?), if 
                // you want. If the File parameter is not specified, *.* is used as the default value. 
                files: ['*'],
                copy: {
                    subdirs: true,
                    emptySubdirs: true
                },
                logging: {
                    listOnly: false,
                },
                output: {
                    file: 'copy.log',
                    overwrite: true,
                    unicode: true
                },
            })
        }
        else {
            // sync with rsync will execute on linux platform
            console.log("we are on darwin");
            var rsync = new this.Rsync()
                .flags('avr')
                .source(this.os.homedir()+"\\Sbox\\")
                .destination(this.os.homedir());

            rsync.execute(function (err:any, code:any, cmd:any) {
                //execute...
                console.log(cmd);
                console.log(code);
                console.log(err);
            });
        }
    }

}