// import { databaseConfig, DatabaseConfig } from './database-config';
// import { loggingConfig, LoggingConfig } from './logging-config';
// // import {serverConfig, ServerConfig} from './server-config';

// class Configs {
//   private _databaseConfig: DatabaseConfig;
//   private _loggingConfig: LoggingConfig;
//   // private _serverConfig: ServerConfig;

//   constructor() {
//     this._databaseConfig = databaseConfig;
//     this._loggingConfig = loggingConfig;
//     // this._serverConfig = serverConfig;
//   }
//   getDatabaseConfig(): DatabaseConfig {
//     return this._databaseConfig;
//   }

//   getLoggingConfig(): LoggingConfig {
//     return this._loggingConfig;
//   }

//   // getServerConfig(): ServerConfig {
//   //   return this._serverConfig;
//   // }
// }

// export const configs = new Configs();





// // import Sequelize = require("sequelize");
// // // let config = require('../config.json');
// // // import * as config from "../config.json";
// // /*interface dbConfig {
// //   username: string,
// //     password: string,
// //     database: string,
// //     option: {
// //         storage?: string,
// //         logging?: boolean,
// //         dialect?: string,
// //         pool?: {
// //        min?: number, 
// //        max?: number 
// //     }
// //     }
// // }*/
// // export default class Sequelized{
// //   private static _instance:Sequelized = new Sequelized();
// //   sequelize:Sequelize.Sequelize;
// //   dataTypes:Sequelize.DataTypes;
// //   constructor() {
// //         if(Sequelized._instance){
// //             console.log("Sequelize实例已存在");
// //         }else{
// //       this.sequelize = new Sequelize("test", "", "", {
// //         storage: "./test.db",
// //         // logging: true,
// //         dialect: "sqlite"
// //       });
// //       this.sequelize.query('select * from sqlite_master').spread(function(r:any,m:any){
// //         console.log(r);console.log(m);
// //       });
// //       console.log();
// //       Sequelized._instance = this;
// //       console.log("Sequelize实例已创建");
// //     }
// //     }
// //   static getIntance():Sequelized{
// //     return Sequelized._instance;
// //   }
// // }




// //create modal
// import Sequelize = require("sequelize");
// var sequelize = new Sequelize("test", "", "", {
//         storage: "./test.db",
//         logging: false,
//         dialect: "sqlite"
// });
// var _sequelize = sequelize.define('nav', {
//   code: { type: Sequelize.STRING, primaryKey: true, field: 'fcode' },
//   /* nav的名称 */
//   name: { type: Sequelize.STRING, allowNull: false, field: 'fname' },
//   /* nav对应的url路径 */
//   url: { type: Sequelize.STRING, field: 'furl' },
//   /*在导航中的显示顺序*/
//   showOrder: { type: Sequelize.INTEGER, field: 'fshoworder' },
//   /*上级导航编码*/
//   parent: { type: Sequelize.STRING, field: 'fpath' }
// }, {
//     // tableName:sysConfig.db.table_prefix+'_navs',
//     /* 自动生成的createdAt使用下划线连接created_at,因为postgresql不支持字段名大写 */
//     underscored: true
//   });
// sequelize.sync();
// export default _sequelize;



// //insert modal 
// findAll(srcOptions?: any): Promise<any[]>{
//     var _default = {
//       // include: [{ model: Nav, as: 'father' }, { model: Nav, as: 'childs' }]
//     };
//     var options = Object.assign(_default, srcOptions);
//     return Nav.findAll(options).then(navs=>navs).catch(err=>err);
//   