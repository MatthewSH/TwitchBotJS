const spawn = require('child_process').spawn;
const React = spawn('cmd.exe', ['/c', 'browserify -t [ babelify --presets [ react ] ] browserify/main.js -o src/react/App.js']);
const Script = spawn('cmd.exe', ['/c', 'browserify browserify/site.js -o src/assets/js/main.js']);
React.stdout.on('data', (data) => {
  console.log(data.toString());
});
React.stderr.on('data', (data) => {
  console.log(data.toString());
});
React.on('exit', (code) => {
  console.log(`ReactJS built.`);
});
Script.stdout.on('data', (data) => {
  console.log(data.toString());
});
Script.stderr.on('data', (data) => {
  console.log(data.toString());
});
Script.on('exit', (code) => {
  console.log(`Site scripts built.`);
});
