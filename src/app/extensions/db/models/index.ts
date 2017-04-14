
import * as cls from 'continuation-local-storage';
import { configs } from './../config/configs';
import { FolderAttributes, FolderInstance } from './../../../interfaces/folder-interface';
// import { logger } from './../../../utils/logger';

import * as fs from 'fs';
import * as path from 'path';
import * as SequelizeStatic from 'sequelize';

//TODO npm install continuation-local-storage --save  npm install @type/sequelize
import { Sequelize } from 'sequelize';
export interface SequelizeModels {
  Folder: SequelizeStatic.Model;

}

class Database {
  private _basename: string;
  private _models: SequelizeModels;
  private _sequelize: Sequelize;

  constructor() {
    this._basename = 'index.js';
    let dbConfig = configs.getDatabaseConfig();

    if (dbConfig.logging) {
      // dbConfig.logging = logger.info;

    }
    (Sequelize as any).cls = cls.createNamespace('sbox'); //changed namespace from sequelize-transaction=>sbox 
    this._sequelize = new Sequelize(dbConfig.database, '',
      '', dbConfig.dialect);
    this._models = ({} as any);

    fs.readdirSync(__dirname).filter((file: string) => {
      return (file !== this._basename) && (file !== 'interfaces');
    }).forEach((file: string) => {
      let model = this._sequelize.import(__dirname + '/' + file);
      this._models[(model as any).name] = model;
    });

    Object.keys(this._models).forEach((modelName: string) => {
      if (typeof this._models[modelName].associate === 'function') {
        this._models[modelName].associate(this._models);
      }
    });
  }

  getModels() {
    return this._models;
  }

  getSequelize() {
    return this._sequelize;
  }
}

const database = new Database();
export const models = database.getModels();
export const sequelize = database.getSequelize();




