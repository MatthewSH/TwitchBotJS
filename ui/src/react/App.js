(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var HomeTab = React.createClass({
  displayName: "HomeTab",

  render: function () {
    return React.createElement(
      "h3",
      null,
      "Home"
    );
  }
});

var ConfigTab = React.createClass({
  displayName: "ConfigTab",

  render: function () {
    return React.createElement(
      "h3",
      null,
      "Config"
    );
  }
});

var PluginsTab = React.createClass({
  displayName: "PluginsTab",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Plugins"
      ),
      React.createElement(
        "p",
        null,
        "Here are some plugins.",
        React.createElement("br", null),
        React.createElement(
          "script",
          null,
          "document.write('Hello!')"
        )
      )
    );
  }
});

var AboutTab = React.createClass({
  displayName: "AboutTab",

  render: function () {
    return React.createElement(
      "h3",
      null,
      "About"
    );
  }
});

var CreatePluginModal = React.createClass({
  displayName: "CreatePluginModal",

  render: function () {
    return React.createElement("h3", null);
  }
});

var Home = React.createClass({
  displayName: "Home",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "script",
        null,
        "var fs = require('fs'); var util = require('util');"
      ),
      React.createElement(
        "div",
        { className: "col-lg-12 col-sm-12" },
        React.createElement(
          "div",
          { className: "card hovercard" },
          React.createElement(
            "div",
            { className: "card-background" },
            React.createElement("img", { className: "card-bkimg", alt: "", src: "assets/images/code2.png" })
          ),
          React.createElement("div", { className: "useravatar" })
        ),
        React.createElement(
          "div",
          { className: "btn-pref btn-group btn-group-justified btn-group-lg", role: "group", "aria-label": "..." },
          React.createElement(
            "div",
            { className: "btn-group", role: "group" },
            React.createElement(
              "button",
              { type: "button", id: "stars", className: "btn btn-primary", href: "#tabHome", "data-toggle": "tab" },
              React.createElement("span", { className: "glyphicon glyphicon-home", "aria-hidden": "true" }),
              React.createElement(
                "div",
                { className: "hidden-xs" },
                "Home"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "btn-group", role: "group" },
            React.createElement(
              "button",
              { type: "button", id: "favorites", className: "btn btn-default", href: "#tabConfiguration", "data-toggle": "tab" },
              React.createElement("span", { className: "glyphicon glyphicon-wrench", "aria-hidden": "true" }),
              React.createElement(
                "div",
                { className: "hidden-xs" },
                "Configuration"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "btn-group", role: "group" },
            React.createElement(
              "button",
              { type: "button", id: "favorites", className: "btn btn-default", href: "#tabPlugins", "data-toggle": "tab" },
              React.createElement("span", { className: "glyphicon glyphicon-folder-open", "aria-hidden": "true" }),
              React.createElement(
                "div",
                { className: "hidden-xs" },
                "Plugins"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "btn-group", role: "group" },
            React.createElement(
              "button",
              { type: "button", id: "favorites", className: "btn btn-default", href: "#tabAbout", "data-toggle": "tab" },
              React.createElement("span", { className: "glyphicon glyphicon-info-sign", "aria-hidden": "true" }),
              React.createElement(
                "div",
                { className: "hidden-xs" },
                "About"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "well" },
          React.createElement(
            "div",
            { className: "tab-content" },
            React.createElement(
              "div",
              { className: "tab-pane fade in active", id: "tabHome" },
              React.createElement(HomeTab, null)
            ),
            React.createElement(
              "div",
              { className: "tab-pane fade in", id: "tabConfiguration" },
              React.createElement(ConfigTab, null)
            ),
            React.createElement(
              "div",
              { className: "tab-pane fade in", id: "tabPlugins" },
              React.createElement(PluginsTab, null)
            ),
            React.createElement(
              "div",
              { className: "tab-pane fade in", id: "tabAbout" },
              React.createElement(AboutTab, null)
            )
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Home, null), document.getElementById('app'));

},{}]},{},[1]);
