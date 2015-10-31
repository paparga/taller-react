const flux = require('./flux')
const beachesApi = require('./utils/beaches-api')

console.log(beachesApi);

exports.increase = (id) => {
  beachesApi.vote(id)
    .then((data)=>{
      flux.dispatch('aumentar-contador',id)
    })
    .catch((err)=>{
      console.error(err)
    })

}

exports.decrease = (id) => {
  beachesApi.unVote(id)
    .then((data)=>{
      flux.dispatch('disminuir-contador',id)
    })
    .catch((err)=>{
      console.error(err)
    })

}

exports.fetchAllBeaches = () =>{
  beachesApi.fetchAll()
    .then((data)=>{
      flux.dispatch('fetch_all_beaches', data)
    })
    .catch((err)=>{
      console.error(err)
    })
}
