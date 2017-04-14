// import { configs } from './../extensions/db/config/configs';
// import * as cluster from 'cluster';
// import * as mkdirp from 'mkdirp';
// import * as path from 'path';
// import * as winston from 'winston';
// import { Request, Response } from 'express';

// let config = configs.getLoggingConfig();
// config.file.filename = `${config.directory, './logs'}/${config.file.filename}`;

// if (cluster.isMaster) {
//     mkdirp.sync(config.directory, './logs');
// }
// //TODO make this winston work with no error
// export const logger = new winston.Logger({
//     transports: [
//         new winston.transports.File(config.file),
//         new winston.transports.Console(config.console)
//     ],
//     exitOnError: false
// });

// export const skip = (req: Request, res: Response): boolean => {
//     return res.statusCode >= 200;
// };
// export const stream = {
//     write: (message: string, encoding: string): void => {
//         logger.info(message);
//     }
//     // tslint:disable-next-line:eofline
// };