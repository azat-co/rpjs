"use strict";

var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "h1",
      null,
      "Chat"
    );
  }
});

var Footer = React.createClass({
  displayName: "Footer",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("hr", null),
      React.createElement(
        "div",
        { className: "row-fluid" },
        React.createElement(
          "div",
          { className: "span12" },
          React.createElement(
            "div",
            null,
            "Rapid Prototyping with JavaScript and NodeJS (",
            React.createElement(
              "a",
              { href: "http://twitter.com/azat_co" },
              "@azat_co"
            ),
            ")"
          )
        )
      )
    );
  }
});

React.render(React.createElement(Header, null), document.getElementById("header"));
React.render(React.createElement(Footer, null), document.getElementById("footer"));
