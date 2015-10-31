const React = require('react')
const Counter = require('./counter')
const {Link} = require('react-router');

const Beach = function({beach}) {

  const style = { height: '300px', width: '300px'}
  const path = '/beaches/' + beach.get('id')

  return (
    <div>
      <Link to={path}>
        <img src={beach.get('img')} style={style} className="img-rounded"/>
      </Link>
      <h3><Link to={path}>{beach.get('name')}</Link></h3>
      <p>{beach.get('place')}</p>

      <br/>
      <Counter id={beach.get('id')} count={beach.get('count')}/>
      <br/>
    </div>
  )
}


module.exports = Beach
