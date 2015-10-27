const React = require('react')
const ReactDOM = require('react-dom')

const Counter = React.createClass({
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

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Contadores</h1>
        <Counter />        
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
