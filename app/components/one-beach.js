const React = require('react')
const flux = require('../flux')
const stores = require('../stores')
const getters = require('../getters')
const actions = require('../actions')
const Beach = require('./beach')

const OneBeach = React.createClass({

  mixins: [flux.ReactMixin],

  getDataBindings() {
    return {
      beach: getters.oneBeach(this.props.params.id),
    }
  },

  componentWillMount(){
    actions.fetchOneBeache(this.props.params.id)
  },

  render: function() {
    const isLoading = (this.state.beach)
                    ? <Beach beach={this.state.beach}/>
                    : <p>Cargando...</p>

    return (
      <div>
        <h1>Concurso de playas</h1>
        <div className="row">
          <div className="col-md-4">
            {isLoading}
          </div>
        </div>
      </div>
    )
  }
})

module.exports = OneBeach
