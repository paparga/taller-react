const React = require('react')
const flux = require('../flux')
const stores = require('../stores')
const getters = require('../getters')
const actions = require('../actions')
const BeachSelector = require('./beach-selector')

const BeachList = React.createClass({

  mixins: [flux.ReactMixin],

  getDataBindings() {
    return {
      beaches: getters.beaches,
      onlyOne: getters.onlyOne,
    }
  },

  componentWillMount(){
    actions.fetchBeaches()
  },

  render: function() {
    const beaches = this.state.beaches
    const beachList = <BeachSelector beaches={beaches}/>
    const isLoaded = (beaches.size > 0) ? beachList : <p>Cargando...</p>

    return (
      <div>
        <h1>Concurso de playas</h1>
        <h2>Vota por tu playa favorita!</h2>
        {isLoaded}
      </div>
    )
  }
})

module.exports = BeachList
