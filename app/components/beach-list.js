const React = require('react')
const BeachSelector = require('./beach-selector')
const Nuclear = require('nuclear-js')
const flux = require('../flux')
const stores = require('../stores')
const getters = require('../getters')
const actions = require('../actions')

const BeachList = React.createClass({

  mixins: [flux.ReactMixin],

  getDataBindings() {
    return {
      beaches: getters.beaches,
    }
  },

  componentWillMount(){
    actions.fetchAllBeaches()
  },

  render: function() {
    const isData = (this.state.beaches.size)
                    ? <BeachSelector beaches={this.state.beaches}/>
                    : <p>Cargando ... </p>
    return (
      <div>
        <h1>Concurso de playas</h1>
        <h2>Vota por tu playa favorita!!!!</h2>
        {isData}

      </div>
    )
  }
})

module.exports = BeachList
