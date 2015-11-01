const axios = require('axios')

const getData = (res) => res.data

/*** para no actualizar count
     una mejor forma de hacer esto es con una liberaria como
     Lodash, Underscore o mejor aun Ramda y la funcion omit  ***/
const omitCount = beach =>{
  delete beach.count
  return beach
}

const beachesApi = {}

beachesApi.fetchAll = () => axios.get('/beaches')
                            .then(getData)

beachesApi.fetchOne = (id) => axios.get('/beaches/' + id)
                              .then(getData)

beachesApi.vote = (id) => axios.post('/beaches/' + id + '/vote')
                            .then(getData)

beachesApi.unVote = (id) => axios.post('/beaches/' + id + '/unvote')
                            .then(getData)

beachesApi.update = beach => axios.put('/beaches/' + beach.id, omitCount(beach))
                              .then(getData)

module.exports = beachesApi
