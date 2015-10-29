const React = require('react')
const Counter = require('./counter')

const Beach = function({beach}) {

  const {img, name, place, myStyle} = beach
  const style = { height: '300px', width: '300px'}


  return (
    <div>
      <img src={img} style={style} className="img-rounded"/>
      <h3>{name} {isRenaca}</h3>
      <p>{place}</p>
      <br/>
      <Counter name={name}/>
      <br/>
    </div>
  )
}

Beach.propTypes = {
  beach:  React.PropTypes.shape({
    img: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    place: React.PropTypes.string.isRequired
  }),
}

module.exports = Beach
