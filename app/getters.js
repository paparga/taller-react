const flux = require('./flux');

exports.beaches = [['beaches'], (beaches) => {
  return beaches.toList()
  }
]

exports.oneBeach = (id) => ['beaches', id]

exports.currentBeach = [
  ['currentValues', 'beach'],
  (currentBeach) => {
    console.log(currentBeach);
    return (currentBeach)
            ? flux.evaluate(['beaches', currentBeach])
            : null
  }
]
