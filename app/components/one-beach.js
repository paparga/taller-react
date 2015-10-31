const React = require('react')
const Beach = require('./beach')

const flux = require('../flux')
const getters = require('../getters')
const actions = require('../actions')

const OneBeach = React.createClass({

  mixins: [flux.ReactMixin],

  getDataBindings() {
    return {
      beach: getters.oneBeach(this.props.params.id),
    }
  },

  componentWillMount(){
    actions.fetchAllBeaches()
  },

  render: function() {
    const isData = (this.state.beach)
                    ? <Beach beach={this.state.beach}/>
                    : <p>Cargando ... </p>
    return (
      <div>
        <h1>Concurso de playas</h1>
        <div className="row">
          <div className="col-md-4">
            {isData}
          </div>
        </div>

      </div>
    )
  }
})

module.exports = OneBeach
