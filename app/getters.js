
exports.beaches = [['beaches'],['counters'], (beaches,counters) => {
  return beaches.toList().map(beach => {
    const id = beach.get('id')
    return beach.set('count', counters.get(id) || 0 )
  })
}]

exports.onlyOne = [['counters'], (counters) =>{
  return counters.some( x => x >= 10)
}]
