const axios = require('axios')

const getData = (res) => res.data

const beachesApi = {}

beachesApi.fetchAll = () => axios.get('/beaches')
                            .then(getData)

beachesApi.fetchOne = (id) => axios.get('/beaches/' + id)
                              .then(getData)

beachesApi.vote = (id) => axios.post('/beaches/' + id + '/vote')
                            .then(getData)

beachesApi.unVote = (id) => axios.post('/beaches/' + id + '/unvote')
                            .then(getData)

module.exports = beachesApi
