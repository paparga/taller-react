const axios = require('axios')

const getData = res => res.data

exports.fetchAll = () => axios.get('/beaches').then(getData)

exports.fetch = (id) => axios.get('/beaches/' + id).then(getData)

exports.update = (id, body) => axios.put('/beaches/' + id, body).then(getData)

exports.vote = (id) => axios.post('/beaches/' + id + '/vote').then(getData)

exports.unVote = (id) => axios.post('/beaches/' + id + '/unvote').then(getData)
