  var HelloWorld = React.createClass({displayName: "HelloWorld",
    render: function() {
      return(
        React.createElement("div", null, 
          React.createElement("h1", null, "Hello World"), 
          React.createElement("p", null, "Words goes here")
        )
      );
    }
  })
  React.render(React.createElement(HelloWorld, null), document.body);
