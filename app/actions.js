const flux = require('./flux')

exports.increase = (id) => {
  flux.dispatch('aumentar-contador',id)
}

exports.decrease = (id) => {
  flux.dispatch('disminuir-contador',id)
}
