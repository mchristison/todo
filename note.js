var Note = React.createClass({
  edit: function() {
    alert('editing note');
  },
  remove: function() {
    alert('removing note');
  }
    render: function() {
      return (
        <div className="note"></div>
          <span>
            <button onClick={this.edit}
                    className="btn btn-primary glyphicon glyphicon-pencil"/>
            <button onClick={this.remove}
                    className="btn btn-danger glyphicon glyphicon-trash"/>
          </span>
        </div>
      );
    }
});


React.render(<Board count={10}/>,
    document.getElementById('react-container'));
