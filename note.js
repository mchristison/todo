var ToDo = React.createClass({
  render: function() {
    var newItem = function(item) {
      return <li key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(newItem)}</ul>
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    //is getInitialState a react command?
    return {items: [], text: ''};
  },
  onChange: function(e) {
    //what is e? Is it like i?
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItem = this.state.items.contact([{test: this.state.text, id:Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return(
      <div>
        <h3>TO-DO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.onChange} value={this.state.text} />
        <button>{'Add #' + (this.state.items.lengeth + 1)}</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<TodoApp />, mountNode);
