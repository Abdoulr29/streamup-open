import {
    Sync
} from './Sync';
import {SyncParams} from './SyncParams';
export class RoboCopy implements Sync {
    public path = require('path');
     os = require('os');
    public robocopy = require('robocopy');
    public source: string;
    public destination: string;

    syncRemote(params: SyncParams) {
        // sync with robocopy will execute on win32

        this.robocopy({
            // Specifies the path to the source directory.
            source: this.os.homedir() + '\\Sbox\\',

            // Specifies the destination path(s).

            destination: this.os.homedir(),

            // Indicates if multiple destinations should be copied serially. By default
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
        });
    }
}