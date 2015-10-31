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

const currentValuesStore = new Nuclear.Store({
  getInitialState:() => {
    return Nuclear.toImmutable({})
  },

  initialize: function() {
    this.on(actionTypes.SET_CURRENT_BEACH, (state,id) => {
      return state.set('beach', id)
    })

  }
})

flux.registerStores({beaches: beachStore, currentValues: currentValuesStore})
