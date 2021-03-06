$(function () {
  var overlay = $('.overlay');
  $(document).on('click', '.btn-pref .btn', function () {
    $('.btn-pref .btn').removeClass('btn-primary').addClass('btn-default');
    $(this).removeClass('btn-default').addClass('btn-primary');
  });
  $(document).on('click', '#installPlugin', function () {
    var plugin = $(this).attr('pluginId');
    var title = $(this).attr('pluginName');
    overlay.html(util.format('<div><i class="fa fa-cog fa-spin fa-5x"></i><h3>Installing %s</h3></div>', title));
    overlay.fadeToggle();
    fs.readFile(path.resolve('..', 'src/plugins/plugins.json'), function (err, data) {
      if (err) {
        overlay.html(util.format('<div><i class="fa fa-exclamation-triangle fa-5x"></i><h3>There was an error when installing %s</h3></div>', title));
        setTimeout(function () {
          overlay.fadeToggle();
        }, 2500);
        throw err;
      } else {
        console.log('About to execute npm');
        exec(util.format('cd %s && npm install', path.resolve('..', util.format('src/plugins/%s', plugin))), function (err, stdout, stderr) {
          if (err) {
            overlay.html(util.format('<div><i class="fa fa-exclamation-triangle fa-5x"></i><h3>There was an error when installing %s</h3></div>', title));
            setTimeout(function () {
              overlay.fadeToggle();
            }, 2500);
            console.log(err);
            throw err;
          }
          console.log(stdout);
          Plugins = JSON.parse(data);
          Plugins.enabled.push(plugin);
          fs.writeFile(path.resolve('..', 'src/plugins/plugins.json'), JSON.stringify(Plugins), function (err) {
            if (err) {
              overlay.html(util.format('<div><i class="fa fa-exclamation-triangle fa-5x"></i><h3>There was an error when installing %s</h3></div>', title));
              setTimeout(function () {
                overlay.fadeToggle();
              }, 2500);
              throw err;
            } else {
              overlay.html(util.format('<div><i class="fa fa-check fa-5x"></i><h3>%s has been installed</h3></div>', title));
              setTimeout(function () {
                overlay.fadeToggle();
                location.reload();
              }, 2500);
            }
          });
        });
      }
    });
  });
  $(document).on('click', '#removePlugin', function () {
    var plugin = $(this).attr('pluginId');
    var title = $(this).attr('pluginName');
    overlay.html(util.format('<div><i class="fa fa-cog fa-spin fa-5x"></i><h3>Removing %s</h3></div>', title));
    overlay.fadeToggle();
    fs.readFile(path.resolve('..', 'src/plugins/plugins.json'), function (err, data) {
      if (err) {
        overlay.html(util.format('<div><i class="fa fa-exclamation-triangle fa-5x"></i><h3>There was an error when removing %s</h3></div>', title));
        setTimeout(function () {
          overlay.fadeToggle();
        }, 2500);
        throw err;
      } else {
        Plugins = JSON.parse(data);
        var PluginPath = path.resolve('..', util.format('src/plugins/%s', plugin));
        if (Plugins.enabled.indexOf(plugin) > -1)
          Plugins.enabled.splice(Plugins.enabled.indexOf(plugin), 1);
        if (Plugins.disabled.indexOf(plugin) > -1)
          Plugins.disabled.splice(Plugins.disabled.indexOf(plugin), 1);
        TBJS.FS.removeDir(PluginPath, function (err) {
          if (err) {
            overlay.html(util.format('<div><i class="fa fa-exclamation-triangle fa-5x"></i><h3>There was an error when removing %s</h3></div>', title));
            setTimeout(function () {
              overlay.fadeToggle();
            }, 2500);
            throw err;
          } else {
            fs.writeFile(path.resolve('..', 'src/plugins/plugins.json'), JSON.stringify(Plugins), function (err) {
              if (err) {
                overlay.html(util.format('<div><i class="fa fa-exclamation-triangle fa-5x"></i><h3>There was an error when removing %s</h3></div>', title));
                setTimeout(function () {
                  overlay.fadeToggle();
                }, 2500);
                throw err;
              } else {
                overlay.html(util.format('<div><i class="fa fa-check fa-5x"></i><h3>%s has been removed</h3></div>', title));
                setTimeout(function () {
                  overlay.fadeToggle();
                  location.reload();
                }, 2500);
              }
            });
          }
        });

      }
    });
  });
  $(document).on('click', '#enablePlugin', function () {
    var plugin = $(this).attr('pluginId');
    var title = $(this).attr('pluginName');
    overlay.html(util.format('<div><i class="fa fa-cog fa-spin fa-5x"></i><h3>Enabling %s</h3></div>', title));
    overlay.fadeToggle();
    fs.readFile(path.resolve('..', 'src/plugins/plugins.json'), function (err, data) {
      if (err) {
        overlay.html(util.format('<div><i class="fa fa-exclamation-triangle fa-5x"></i><h3>There was an error when enabling %s</h3></div>', title));
        setTimeout(function () {
          overlay.fadeToggle();
        }, 2500);
        throw err;
      } else {
        Plugins = JSON.parse(data);
        var index = Plugins.disabled.indexOf(plugin);
        if (index > -1) {
          Plugins.enabled.push(plugin);
          Plugins.disabled.splice(index, 1);
        }
        fs.writeFile(path.resolve('..', 'src/plugins/plugins.json'), JSON.stringify(Plugins), function (err) {
          if (err) {
            overlay.html(util.format('<div><i class="fa fa-exclamation-triangle fa-5x"></i><h3>There was an error when enabling %s</h3></div>', title));
            setTimeout(function () {
              overlay.fadeToggle();
            }, 2500);
            throw err;
          } else {
            overlay.html(util.format('<div><i class="fa fa-check fa-5x"></i><h3>%s has been enabled</h3></div>', title));
            setTimeout(function () {
              overlay.fadeToggle();
              location.reload();
            }, 2500);
          }
        });
      }
    });
  });
  $(document).on('click', '#disablePlugin', function () {
    var plugin = $(this).attr('pluginId');
    var title = $(this).attr('pluginName');
    overlay.html(util.format('<div><i class="fa fa-cog fa-spin fa-5x"></i><h3>Disabling %s</h3></div>', title));
    overlay.fadeToggle();
    fs.readFile(path.resolve('..', 'src/plugins/plugins.json'), function (err, data) {
      if (err) {
        overlay.html(util.format('<div><i class="fa fa-exclamation-triangle fa-5x"></i><h3>There was an error when disabling %s</h3></div>', title));
        setTimeout(function () {
          overlay.fadeToggle();
        }, 2500);
        throw err;
      } else {
        Plugins = JSON.parse(data);
        var index = Plugins.enabled.indexOf(plugin);
        if (index > -1) {
          Plugins.disabled.push(plugin);
          Plugins.enabled.splice(index, 1);
        }
        fs.writeFile(path.resolve('..', 'src/plugins/plugins.json'), JSON.stringify(Plugins), function (err) {
          if (err) {
            overlay.html(util.format('<div><i class="fa fa-exclamation-triangle fa-5x"></i><h3>There was an error when disabling %s</h3></div>', title));
            setTimeout(function () {
              overlay.fadeToggle();
            }, 2500);
            throw err;
          } else {
            overlay.html(util.format('<div><i class="fa fa-check fa-5x"></i><h3>%s has been disabled</h3></div>', title));
            setTimeout(function () {
              overlay.fadeToggle();
              location.reload();
            }, 2500);
          }
        });
      }
    });
  });
});
