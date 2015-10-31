const flux = require('./flux')
const beachesApi = require('./utils/beaches-api')

console.log(beachesApi);

exports.increase = (id) => {
  flux.dispatch('aumentar-contador',id)
}

exports.decrease = (id) => {
  flux.dispatch('disminuir-contador',id)
}

exports.fetchAllBeaches = () =>{
  beachesApi.fetchAll().then((data)=>{
    flux.dispatch('fetch_all_beaches', data)
  })
}
