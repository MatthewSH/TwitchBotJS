exports.enabled = true;

exports.boot = function(bot) { // Bot is passed through to send commands.
  console.log('Welcome hook loaded! Thanks for playing');
  TBEmitter.on('join', (bot, channel, user) => {
  });
  TBEmitter.on('say', (bot, channel, user, message) => {
  });
  TBEmitter.on('raw', (message) => {
  });
};
