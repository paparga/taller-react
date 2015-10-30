
exports.beaches = [['beaches'],['counters'], (beaches,counters) => {
  return beaches.map(beach => {
    const id = beach.get('id')
    return beach.set('count', counters.get(id) || 0 )
  })
}]

exports.onlyOne = [['counters'], (counters) =>{
  return counters.toList().some( x => x >= 10)
}]
