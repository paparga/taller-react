const Nuclear = require('nuclear-js')
const flux = require('./flux')
const actionTypes = require('./action-types')

const beachStore = new Nuclear.Store({
  getInitialState:() =>{
    return Nuclear.toImmutable({})
  },

  initialize: function() {
    this.on(actionTypes.FETCH_BEACHES, (state,beaches)=>{
      let temp = beaches.reduce((obj,beach) => {
        obj[beach.id] = beach
        return obj
      },{})
      return Nuclear.toImmutable(temp)
    })
    this.on(actionTypes.VOTE, (state,id)=>{
      return state.updateIn([id, 'count'], count => count + 1)
    })
    this.on(actionTypes.UNVOTE, (state,id)=>{
      return state.updateIn([id, 'count'], count => count - 1)
    })
    this.on(actionTypes.FETCH_ONE_BEACH, (state, beach)=>{

      return state.set(beach.id, Nuclear.toImmutable(beach))
    })
  }
})

flux.registerStores({beaches: beachStore})
