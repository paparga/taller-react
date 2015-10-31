const flux = require('./flux')
const beachesApi = require('./utils/beaches-api')
const actionTypes = require('./action-types')

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
