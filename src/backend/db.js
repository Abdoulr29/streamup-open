var sql = require('sqlite3').verbose();
var db= new sql.Database('example');
db.serialize(function(){
    db.run("CREATE TABLE user_configs(id INT,vpn TEXT,auth_key TEXT)");
    var stmt = db.prepare("INSERT INTO user_configs values(?,?,?)");
    for (var index = 0; index < 10; index++) {
        var d  =new Date();
        var n = d.toLocaleTimeString();
        
    }
    stmt.finalize();
    db.each("SELECT id,vpn from user_configs",function(err,row){
        console.log("confId: "+ row.id);
    });
})



// set OPENSSL_CONF=c:\apache\conf\openssl.cnf
// openssl req -config c:\apache\conf\openssl.cnf -new -out c:\apache\conf\server.csr -keyout c:\apache\conf\server.pem
// openssl rsa -in c:\apache\conf\server.pem -out c:\apache\conf\server.key
// openssl x509 -req -signkey c:\apache\conf\server.key -days 1024 -in c:\apache\conf\server.csr -out c:\apache\conf\server.crt