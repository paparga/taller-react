var Flux = require('../../flux')

Flux.registerStores({
  form: require('./stores/form-store'),
})

module.exports = {
  dispatch: require('./dispatch'),

  getters: require('./getters'),
}
