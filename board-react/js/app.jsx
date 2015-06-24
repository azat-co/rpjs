var Header = React.createClass({
  render: function(){
    return (
      <h1>Chat</h1>
    )
  }
})

var Footer = React.createClass({
  render: function(){
    return (
      <div>
        <hr />
        <div className="row-fluid">
          <div className="span12">
            <div>Rapid Prototyping with JavaScript and NodeJS (<a href="http://twitter.com/azat_co">@azat_co</a>)</div>
          </div>
        </div>
      </div>
    )
  }
})


var MessageList = React.createClass({
  render: function(){
    var messages = this.props.messages
    console.log(messages)
    if (!messages.length>0) return (
      <tr>
        <td colspan="2">No messages yet</td>
      </tr>
    )
    return (
      <div className="span12">
        <table className="table table-bordered table-striped">
          <caption>Chat</caption>
          <thead>
            <tr>
              <th className="span2">Username</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(function(message){
              return (
                <tr key={message.id}>
                  <td>{message.username}</td>
                  <td>{message.message}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
})


var NewMessage = React.createClass({
  addMessage: function(){
    this.props.addMessageCb({
      username: React.findDOMNode(this.refs.username).value,
      message: React.findDOMNode(this.refs.message).value
    })
    React.findDOMNode(this.refs.username).value = ''
    React.findDOMNode(this.refs.message).value = ''
  },
  render: function(){
    return (
      <div className="row-fluid" id="new-message">
        <div className="span12">
          <form className="well form-inline" >
            <input type="text" name="username" className="input-small" placeholder="Username" ref="username"/>
            <input type="text" name="message" className="input-small" placeholder="Message Text" ref="message" />
            <a id="send" className="btn btn-primary" onClick={this.addMessage}>SEND</a>
          </form>
        </div>
      </div>
    )
  }
})

var MessageBoard = React.createClass({
  getInitialState: function(){
    return {messages: [{id: 1, username: 'Azat', message: 'hi'}]}
  },
  addMessage: function(message){
    var messages = this.state.messages
    message.id = Math.random()
    messages.push(message)
    this.setState({messages: messages})
  },
  render: function(){
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <NewMessage messages={this.state.messages} addMessageCb={this.addMessage} />
      </div>
    )
  }
})

React.render(<Header />, document.getElementById('header'))
React.render(<Footer />, document.getElementById('footer'))
React.render(<MessageBoard />, document.getElementById('message-board'))