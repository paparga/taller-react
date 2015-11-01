const React = require('react')
const Beach = require('./beach')
const {Link} = require('react-router');

const flux = require('../flux')
const getters = require('../getters')
const actions = require('../actions')

const BeachForm = require('./beach-form')

const OneBeach = React.createClass({

  mixins: [flux.ReactMixin],

  getDataBindings() {
    return {
      beach: getters.currentBeach,
      isEditing: getters.isEditingBeach,
    }
  },

  componentWillMount(){
    actions.fetchAllBeaches()
  },

  componentDidMount(){
    actions.setCurrentBeach(this.props.params.id)
  },

  componentWillReceiveProps(nextProps){
    if (this.props.params.id !== nextProps.params.id) {
      actions.setCurrentBeach(nextProps.params.id)
    }
  },

  componentWillUnmount(){
    if (this.state.isEditing) {
      actions.unregisterEditBeachForm()
    }
  },

  edit(){
    actions.registerEditBeachForm(this.props.params.id)
  },

  render: function() {
    const isData = (this.state.beach != null)
                    ? <Beach beach={this.state.beach}/>
                    : <p>Cargando ... </p>

    const editForm = (this.state.isEditing)
                    ? <BeachForm />
                    : null

    const editButton = (!this.state.isEditing && this.state.beach != null)
                        ? <button type="button" className="btn btn-primary"
                                onClick={this.edit}>Editar</button>
                        : null

    return (
      <div>
        <h1>Concurso de playas</h1>
        <div className="row">
          <div className="col-md-4">
            {isData}
            {editButton}
          </div>
          <div className="col-md-8">
            {editForm}
          </div>
        </div>
        <Link to={'/beaches'}>Volver</Link>

      </div>
    )
  }
})

module.exports = OneBeach
