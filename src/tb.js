/**
 * TBJS Dependencies
 */
var irc = require('irc');
var util = require('util');
var events = require('events');
var TBJS = {
  Functions: require('tbjs/Functions')
};

// Config
var config = {
  server: 'irc.twitch.tv',
  port: 6667,
  secure: false,
  channels: [''],
  nick: '',
  oauth: '',
  floodDelay: 3
}
var bot = new irc.Client(config.server, config.nick, {
  channels: [config.channels + ' ' + config.oauth],
  debug: false,
  showErrors: true,
  password: config.oauth,
  username: config.nick
});
var commands = {};
var protected = false;
global.prefix = '!';
global.TBEmitter = new events.EventEmitter();

/**
 * Automated tasks
 */
setInterval(function() {
  if(protected) {
    setTimeout(function() {
      protected = false;
    }, (config.floodDelay * 1000));
  }
}, 100);

/**
 * Hook Loading
 */
var HookFolders = TBJS.Functions.getFolders('./hooks');
for (var i = 0; i < HookFolders.length; i++) {
  var hook;
  try {
    hook = require(util.format('./hooks/%s', HookFolders[i]));
    if(hook) {
      if(hook.enabled) {
        hook.boot(bot);
      }
    }
  } catch(error) {
    console.log(util.format('Improper setup of the %s hook.', HookFolders[i]));
  }
}
/**
 * Plugin Import
 */
var PluginFolders = TBJS.Functions.getFolders('./plugins');
for (var i = 0; i < PluginFolders.length; i++) {
  var plugin;
  try {
    plugin = require(util.format('./plugins/%s', PluginFolders[i]));
    if(plugin) {
      if(plugin.enabled) {
        if('commands' in plugin) {
          for (var c = 0; c < plugin.commands.length; c++) {
            if(plugin.commands[c] in plugin) {
              commands[plugin.commands[c]] = plugin[plugin.commands[c]];
            }
          }
        }
      }
    }
  } catch(error) {
    console.log(util.format('Improper setup of the %s plugin.', PluginFolders[i]));
  }
}

/**
 * Bot Listeners
 */
bot.addListener('join', function(channel, user, message) {
  TBEmitter.emit('join', bot, channel, user);
});

bot.addListener('message', function(user, channel, message) {
  TBEmitter.emit('say', bot, channel, user, message);
  if(TBJS.Functions.isCommand(message)) {
    var cmd = commands[TBJS.Functions.getCommand(message)];
    if(cmd) {
      if(cmd.protected && !protected) {
        cmd.process(bot, channel, user, message);
        protect = true;
      } else {
        cmd.process(bot, channel, user, message);
      }
    }
  }
});
bot.addListener('raw', function(message) {
  TBEmitter.emit('raw', bot, message); // Stay away from the raw unless you need it
})
