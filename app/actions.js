const flux = require('./flux')
const beaches = require('./utils/beaches-api')
const actionTypes = require('./action-types')

exports.increase = (id) => {
  beaches.vote(id)
    .then((res) => flux.dispatch(actionTypes.VOTE, id))
    .catch((err)=>{console.error(err)})
}

exports.decrease = (id) => {
  beaches.unVote(id)
    .then((res) => flux.dispatch(actionTypes.UNVOTE, id))
    .catch((err)=>{console.error(err)})
}

exports.fetchBeaches = () => {
  beaches.fetchAll()
    .then((res) => flux.dispatch(actionTypes.FETCH_BEACHES, res))
    .catch((err)=>{console.error(err)})
}

exports.fetchOneBeache = (id) => {
  beaches.fetch(id)
    .then((res) => flux.dispatch(actionTypes.FETCH_ONE_BEACH, res))
    .catch((err)=>{console.error(err)})
}
