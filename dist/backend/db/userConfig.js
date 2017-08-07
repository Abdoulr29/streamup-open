var db = require('../db');
var result =[];
function saveUserConfig(vpn,auth_key){
	db.serialize(function(){
	    db.run("CREATE TABLE IF NOT EXIST user_configs(id INT,vpn TEXT,auth_key TEXT)");
	    var stmt = db.prepare("INSERT INTO user_configs values(?,?,?)");
	    stmt.run(1,"123.334.44.324","auth_key");
	    stmt.finalize();
	    db.each("SELECT id,vpn from user_configs",function(err,row){
	        result.push({"id":row.id},{"vpn":row.vpn},{"auth_key":row.auth_key});
	    });
	});
	return result;
}
module.exports = saveUserConfig();





