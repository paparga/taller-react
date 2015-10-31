const React = require('react')
const Beach = require('./beach')
const {Link} = require('react-router');

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

  componentDidMount(){
    actions.setCurrentBeach(this.props.params.id)
  },

  render: function() {
    const isData = (this.state.beach != null)
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
        <Link to={'/beaches'}>Volver</Link>

      </div>
    )
  }
})

module.exports = OneBeach
