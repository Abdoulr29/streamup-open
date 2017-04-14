var fs = require('fs');
var path = require('path');

var _basename = path.basename(module.filename);
console.log(__dirname);
// fs.readdirSync(__dirname).filter((file) => {
//     // console.log(_basename);
//       return (file !== _basename) && (file !== 'interfaces');
//     }).forEach((file) => {
//     //   let model = this._sequelize.import(__dirname + '/' + file);
//       console.log(file);
//     //   this._models[(model as any).name] = model;
//     });