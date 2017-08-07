var sql = require('sqlite3').verbose();
var db= new sql.Database('example');
module.exports =db;

//set it on your apache for ssl stuf!
// set OPENSSL_CONF=c:\apache\conf\openssl.cnf
// openssl req -config c:\apache\conf\openssl.cnf -new -out c:\apache\conf\server.csr -keyout c:\apache\conf\server.pem
// openssl rsa -in c:\apache\conf\server.pem -out c:\apache\conf\server.key
// openssl x509 -req -signkey c:\apache\conf\server.key -days 1024 -in c:\apache\conf\server.csr -out c:\apache\conf\server.crt