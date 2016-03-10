var HomeTab             = React.createClass({
  render: function() {
    return(
      <h3>Home</h3>
    );
  }
});

var ConfigTab           = React.createClass({
  render: function() {
    return(
      <h3>Config</h3>
    );
  }
});

var PluginsTab          = React.createClass({
  render: function() {
    return(
      <div>
        <h3>Plugins</h3>
        <p>
          Here are some plugins.
          <br />
          <script>document.write('Hello!')</script>
        </p>
      </div>
    );
  }
});

var AboutTab            = React.createClass({
  render: function() {
    return(
      <h3>About</h3>
    );
  }
});

var CreatePluginModal   = React.createClass({
  render: function() {
    return(
      <h3></h3>
    );
  }
});

var Home                = React.createClass({
  render: function() {
    return (
      <div>
        <script>
          var fs = require('fs');
          var util = require('util');
        </script>
        <div className="col-lg-12 col-sm-12">
          <div className="card hovercard">
            <div className="card-background">
              <img className="card-bkimg" alt="" src="assets/images/code2.png" />
            </div>
            <div className="useravatar">
              {/*<img alt="" src="assets/images/Twitch-Icon.png" />*/}
            </div>
          </div>
          <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
            <div className="btn-group" role="group">
              <button type="button" id="stars" className="btn btn-primary" href="#tabHome" data-toggle="tab"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>
              <div className="hidden-xs">Home</div>
              </button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" id="favorites" className="btn btn-default" href="#tabConfiguration" data-toggle="tab"><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>
              <div className="hidden-xs">Configuration</div>
              </button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" id="favorites" className="btn btn-default" href="#tabPlugins" data-toggle="tab"><span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
              <div className="hidden-xs">Plugins</div>
              </button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" id="favorites" className="btn btn-default" href="#tabAbout" data-toggle="tab"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
              <div className="hidden-xs">About</div>
              </button>
            </div>
          </div>
          <div className="well">
            <div className="tab-content">
              <div className="tab-pane fade in active" id="tabHome">
                <HomeTab />
              </div>
              <div className="tab-pane fade in" id="tabConfiguration">
                <ConfigTab />
              </div>
              <div className="tab-pane fade in" id="tabPlugins">
                <PluginsTab />
              </div>
              <div className="tab-pane fade in" id="tabAbout">
                <AboutTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);
