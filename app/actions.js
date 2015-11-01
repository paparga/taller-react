const flux = require('./flux')
const beachesApi = require('./utils/beaches-api')
const actionTypes = require('./action-types')
const getters = require('./getters')
const form = require('./modules/form')

exports.increase = (id) => {
  beachesApi.vote(id)
    .then((data)=>{
      flux.dispatch(actionTypes.AUMENTAR_CONTADOR,id)
    })
    .catch((err)=>{
      console.error(err)
    })

}

exports.decrease = (id) => {
  beachesApi.unVote(id)
    .then((data)=>{
      flux.dispatch(actionTypes.DISMINUIR_CONTADOR,id)
    })
    .catch((err)=>{
      console.error(err)
    })

}

exports.fetchAllBeaches = () =>{
  beachesApi.fetchAll()
    .then((data)=>{
      flux.dispatch(actionTypes.FETCH_ALL_BEACHES, data)
    })
    .catch((err)=>{
      console.error(err)
    })
}

exports.setCurrentBeach = (id) => {
  flux.dispatch(actionTypes.SET_CURRENT_BEACH, id)
}

/*** Formulario: hay que registrarlo con data inicial
     La informacion se obtiene con flux.evaluate(getter)
***/
exports.registerEditBeachForm = (id) => {
  const initialValues = flux.evaluate(getters.oneBeach(id))
  form.dispatch.register('beach_edit_form', initialValues)
  flux.dispatch(actionTypes.EDITING_BEACH, true)
}

/*** Se actualizan los campos ***/
exports.setEditBeachFormValue = (fieldName, value) =>{
  form.dispatch.setFieldValue('beach_edit_form', fieldName, value)
}

/*** Una vez que se deja de utilizar se elimina ***/
exports.unregisterEditBeachForm = () => {
  form.dispatch.unregister('beach_edit_form')
  flux.dispatch(actionTypes.EDITING_BEACH, false)
}

/*** Actualiza playa
     primero necesito convertir los valores del formulario a JS
     luego llamo a mi api y actualizo la playa
***/
exports.updateBeach = () =>{
  const beach = flux.evaluateToJS(getters.editBeachFormValues)
  beachesApi.update(beach)
    .then((data)=>{
      flux.dispatch(actionTypes.EDITING_BEACH, false)
      flux.dispatch(actionTypes.UPDATE_BEACH, data)
      form.dispatch.unregister('beach_edit_form')
    })
    .catch((err)=>{
      console.error(err)
    })
}
