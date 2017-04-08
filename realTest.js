// var Redis = require('ioredis');
// var redis = new Redis();
// var isOnline = require('is-online');;
// isOnline().then(online => {

//   if (!online) {
//     new Redis().subscribe('folder-created');
//     new Redis().on('message', function (channel, message) {
//       console.log(message);
//       // var download = function (uri, filename, callback) {
//       //     request.head(uri, function (err, res, body) {

//       //         request(uri).pipe(fs.createWriteStream(os.homedir() + '/Sbox/' + filename)).on('close', callback);

//       //     });
//       // };
//       // download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function () {

//       // });
//     });
//   }
// });

var fs = require('fs');
fs.appendFile('error.fix', 'data to append\n hello Again', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
