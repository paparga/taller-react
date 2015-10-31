const flux = require('./flux')
const beaches = require('./utils/beaches-api')

exports.increase = (id) => {
  flux.dispatch('aumentar-contador',id)
}

exports.decrease = (id) => {
  flux.dispatch('disminuir-contador',id)
}
