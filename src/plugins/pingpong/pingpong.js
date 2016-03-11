exports.enabled = true;
exports.title = 'Ping Pong';
exports.description = 'A basic ping pong plugin for TBJS';
exports.author = 'MatthewH';
exports.commands = ['ping'];

exports.ping = {
  description: 'Play ping pong',
  protected: true,
  process: function(bot, channel) {
    bot.say(channel, 'Pong!');
  }
};
