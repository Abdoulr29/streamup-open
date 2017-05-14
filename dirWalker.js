var fs = require('fs');
var outFiles=[];

fs.readdirSync('.').filter(function(name){
    
    return true;
}).forEach(function(file){
    outFiles.push(file);
    console.log(outFiles);
})