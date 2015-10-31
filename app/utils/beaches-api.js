const axios = require('axios')

exports.fetchAll = () => axios.get('/beaches')

exports.fetch = (id) => axios.get('/beaches/' + id)

exports.update = (id, body) => axios.put('/beaches/' + id, body)

exports.vote = (id) => axios.get('/beaches/' + id + '/vote')

exports.unVote = (id) => axios.get('/beaches/' + id + '/unvote')
