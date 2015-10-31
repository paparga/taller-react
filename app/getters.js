
exports.beaches = [['beaches'], (beaches) => {
  return beaches.toList()
  }
]

exports.onlyOne = [['counters'], (counters) =>{
  return counters.some( x => x >= 10)
}]

exports.oneBeach = (id) => ['beaches', id]
