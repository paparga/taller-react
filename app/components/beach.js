const React = require('react')
const Counter = require('./counter')

const Beach = function({beach}) {

  const style = { height: '300px', width: '300px'}

  return (
    <div>
      <img src={beach.get('img')} style={style} className="img-rounded"/>
      <h3>{beach.get('name')}</h3>
      <p>{beach.get('place')}</p>
      <br/>
      <Counter id={beach.get('id')} count={beach.get('count')}/>
      <br/>
    </div>
  )
}


module.exports = Beach
