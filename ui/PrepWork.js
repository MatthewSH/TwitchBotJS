var exec = require('child_process').exec;
exec('browserify -t [ babelify --presets [ react ] ] browserify/main.js -o src/react/App.js', function (err, stdout, stderr) {
  if (err) {
    throw err;
  }
  console.log('ReactJS built.');
});
exec('browserify browserify/site.js | uglifyjs > src/assets/js/main.js', function (err, stdout, stderr) {
  if (err) {
    throw err;
  }
  console.log('Site scripts built.');
});
