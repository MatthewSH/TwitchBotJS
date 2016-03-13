var spawn = require('child_process').spawn;
var React = spawn('cmd.exe', ['/c', 'browserify -t [ babelify --presets [ react ] ] browserify/main.js -o src/react/App.js']);
var Script = spawn('cmd.exe', ['/c', 'browserify browserify/site.js | uglifyjs > src/assets/js/main.js']);
React.stdout.on('data', function (data) {
  console.log(data.toString());
});
React.stderr.on('data', function (data) {
  console.log(data.toString());
});
React.on('exit', function (code) {
  console.log('ReactJS built.');
});
Script.stdout.on('data', function (data) {
  console.log(data.toString());
});
Script.stderr.on('data', function (data) {
  console.log(data.toString());
});
Script.on('exit', function (code) {
  console.log('Site scripts built.');
});
