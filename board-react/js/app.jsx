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

React.render(<Header />, document.getElementById('header'))
React.render(<Footer />, document.getElementById('footer'))