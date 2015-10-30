const React = require('react')
const flux = require('../flux')

const actions = require('../actions')
const getters = require('../getters')

module.exports = React.createClass({

  increase: function(){
    actions.increase(this.props.id)
  },

  decrease: function(){
    actions.decrease(this.props.id)
  },

  render: function() {

    const disabled = (this.props.count <= 0) ? true : false

    return (
      <div>

        <p>Actual: {this.props.count}</p>
        <button type="button" className="btn btn-primary"
                onClick={this.increase}>Aumentar</button>
        <button type="button" className="btn btn-danger" disabled={disabled}
                onClick={this.decrease}>Dismnuir</button>
      </div>
    )
  }
})
