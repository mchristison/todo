  var HelloWorld = React.createClass({
    render: function() {
      return(
        <div>
          <h1>Hello World</h1>
          <p>Words goes here</p>
        </div>
      );
    }
  })
  React.render(<HelloWorld />, document.body);
