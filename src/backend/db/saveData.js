let knew = require('knex')({
  client:'sqlite3',
  connection:{
    filename:'./backend/database.sqlite'
  }
});
ipc.on('save-user-config',function(event){
  let result = knex.select('vpn').from('user_config');
  result.then(function(row){
   //put dower code here 
  })
});