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

var MessageList = React.createClass({
  displayName: "MessageList",

  render: function render() {
    var messages = this.props.messages;
    console.log(messages);
    if (!messages.length > 0) return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        { colspan: "2" },
        "No messages yet"
      )
    );
    return React.createElement(
      "div",
      { className: "span12" },
      React.createElement(
        "table",
        { className: "table table-bordered table-striped" },
        React.createElement(
          "caption",
          null,
          "Chat"
        ),
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              { className: "span2" },
              "Username"
            ),
            React.createElement(
              "th",
              null,
              "Message"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          messages.map(function (message) {
            return React.createElement(
              "tr",
              { key: message.id },
              React.createElement(
                "td",
                null,
                message.username
              ),
              React.createElement(
                "td",
                null,
                message.message
              )
            );
          })
        )
      )
    );
  }
});

var NewMessage = React.createClass({
  displayName: "NewMessage",

  addMessage: function addMessage() {
    this.props.addMessageCb({
      username: React.findDOMNode(this.refs.username).value,
      message: React.findDOMNode(this.refs.message).value
    });
    React.findDOMNode(this.refs.username).value = "";
    React.findDOMNode(this.refs.message).value = "";
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "row-fluid", id: "new-message" },
      React.createElement(
        "div",
        { className: "span12" },
        React.createElement(
          "form",
          { className: "well form-inline" },
          React.createElement("input", { type: "text", name: "username", className: "input-small", placeholder: "Username", ref: "username" }),
          React.createElement("input", { type: "text", name: "message", className: "input-small", placeholder: "Message Text", ref: "message" }),
          React.createElement(
            "a",
            { id: "send", className: "btn btn-primary", onClick: this.addMessage },
            "SEND"
          )
        )
      )
    );
  }
});

var MessageBoard = React.createClass({
  displayName: "MessageBoard",

  getInitialState: function getInitialState() {
    return { messages: [{ id: 1, username: "Azat", message: "hi" }] };
  },
  addMessage: function addMessage(message) {
    var messages = this.state.messages;
    message.id = Math.random();
    messages.push(message);
    this.setState({ messages: messages });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(MessageList, { messages: this.state.messages }),
      React.createElement(NewMessage, { messages: this.state.messages, addMessageCb: this.addMessage })
    );
  }
});

React.render(React.createElement(Header, null), document.getElementById("header"));
React.render(React.createElement(Footer, null), document.getElementById("footer"));
React.render(React.createElement(MessageBoard, null), document.getElementById("message-board"));
