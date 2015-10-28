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

    const disabled = (this.state.count <= 0) ? true : false
    const winner = (this.state.count >= 10)
                    ? 'Ha ganado ' + this.props.name
                    : null

    return (
      <div>
        {winner}
        <p>Actual: {this.state.count}</p>
        <button type="button" className="btn btn-primary"
                onClick={this.increase}>Aumentar</button>
        <button type="button" className="btn btn-danger" disabled={disabled}
                onClick={this.decrease}>Dismnuir</button>
      </div>
    )
  }
})
