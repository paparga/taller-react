
exports.beaches = [['beaches'], beaches => beaches.toList()]

exports.onlyOne = [['beaches'], beaches =>{
  return beaches.toList().some( x => x.get('count') >= 10)
}]
