const React = require('react')

module.exports = React.createClass({
  getInitialState: function() {
    return {count: 0}
  },

  increase: function(){
    this.setState({count: this.state.count + 1})
  },

  decrease: function(){
    this.setState({count: this.state.count - 1})
  },

  render: function() {
    return (
      <div>
        <p>Actual: {this.state.count}</p>
        <button type="button" className="btn btn-primary"
                onClick={this.increase}>Aumentar</button>
        <button type="button" className="btn btn-danger"
                onClick={this.decrease}>Dismnuir</button>
      </div>
    )
  }
})
