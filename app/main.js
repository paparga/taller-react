const React = require('react')
const ReactDOM = require('react-dom')
const BeachSelector = require('./components/beach-selector')
const Nuclear = require('nuclear-js')
const flux = require('./flux')
const stores = require('./stores')
const getters = require('./getters')





const App = React.createClass({

  mixins: [flux.ReactMixin],

  getDataBindings() {
    return {
      beaches: getters.beaches,
      onlyOne: getters.onlyOne,
    }
  },

  render: function() {
    return (
      <div>
        <h1>Concurso de playas</h1>
        <h2>Vota por tu playa favorita!</h2>
        <p>{this.state.onlyOne}</p>
        <BeachSelector beaches={this.state.beaches}/>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
