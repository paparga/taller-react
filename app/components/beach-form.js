const React = require('react')
const flux = require('../flux')
const getters = require('../getters')
const actions = require('../actions')

const BeachList = React.createClass({

  mixins: [flux.ReactMixin],

  getDataBindings() {
    return {
      currentValues: getters.editBeachFormValues,
    }
  },

  setFieldValue: (fieldName) => (e) =>{
    actions.setEditBeachFormValue(fieldName, e.target.value)
  },

  update(){
    actions.updateBeach()
  },

  cancel(){
    actions.unregisterEditBeachForm()
  },

  render: function() {
    const currentValues = this.state.currentValues

    return (
      <div>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" value={currentValues.get('name')}
            className="form-control" onChange={this.setFieldValue('name')}/>
        </div>
        <div className="form-group">
          <label>Lugar</label>
          <input type="text" value={currentValues.get('place')}
            className="form-control" onChange={this.setFieldValue('place')}/>
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input type="text" value={currentValues.get('img')}
            className="form-control" onChange={this.setFieldValue('img')}/>
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary"
                  onClick={this.update}>Actualizar</button>
          <button type="button" className="btn btn-danger"
                  onClick={this.cancel}>Cancelar</button>
        </div>
      </div>
    )
  }
})

module.exports = BeachList
