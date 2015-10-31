const Nuclear = require('nuclear-js')
const flux = require('./flux')
const actionTypes = require('./action-types')


const beachStore = new Nuclear.Store({
  getInitialState:() => {
    return Nuclear.toImmutable({})
  },

  initialize: function() {
    this.on(actionTypes.FETCH_ALL_BEACHES, (state,beaches) => {
      return Nuclear.toImmutable(beaches.reduce(function(obj,beach){
        obj[beach.id] = beach
        return obj
      },{}))
    })
    this.on(actionTypes.AUMENTAR_CONTADOR,(state,id)=>{
      return state.updateIn([id, 'count'], count => count + 1)
    })
    this.on(actionTypes.DISMINUIR_CONTADOR,(state,id)=>{
      return state.updateIn([id, 'count'], count => count - 1)
    })
  }
})

const counterStore = new Nuclear.Store({
  getInitialState:() =>{
    return Nuclear.toImmutable({})
  },

  initialize: function(){
  //   this.on('aumentar-contador', (state,id)=>{
  //     if (state.has(id)) {
  //       return state.updateIn([id], count => count + 1)
  //     }else {
  //       return state.setIn([id],1)
  //     }
  //   })
  //   this.on('disminuir-contador', (state,id)=>{
  //     if (state.has(id)) {
  //       return (state.get(id) === 0)
  //               ? state
  //               : state.updateIn([id], count => count - 1)
  //     }else {
  //       return state
  //     }
  //   })
  }
})

flux.registerStores({beaches: beachStore, counters: counterStore})
