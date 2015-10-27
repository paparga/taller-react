const React = require('react')

module.exports = React.createClass({

  propTypes: {
    beach:  React.PropTypes.shape({
      img: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      place: React.PropTypes.string.isRequired,
    }),
  },

  render: function() {

    const {img, name, place} = this.props.beach
    const style = { height: '300px', width: '300px'}

    return (
      <div>
        <img src={img} style={style} className="img-rounded"/>
        <h3>{name}</h3>
        <p>{place}</p>
        <br/>
      </div>
    )
  }
})
