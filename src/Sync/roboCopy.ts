import {
    Sync
} from './Sync';
import {SyncParams} from './SyncParams';
export class RoboCopy implements Sync {
     path = require('path');
     os = require('os');
     robocopy = require('robocopy');

    syncRemote(_params: SyncParams) {

        this.robocopy({
            // Specifies the path to the source directory.
            //0727290281
            source: this.os.homedir() + '\\Sbox\\',

            // Specifies the destination path(s).

            destination:"//192.168.1.2\\Users\\Pc\\Desktop\\richie\\",

            // Indicates if multiple destinations should be copied serially. By default
            // multiple destinations are copied in parallel.
            serial: false,

            // Specifies the file or files to be copied. You can use wildcard characters (* or ?), if
            // you want. If the File parameter is not specified, *.* is used as the default value.
            files: ['*'],
            copy: {
                subdirs: true,
                emptySubdirs: true,
                sec:true
            },
            logging: {
                listOnly: false,
            },
            output: {
                file: 'copy.log',
                overwrite: true,
                unicode: true
            },
        });
    }
}