const React = require('react')
const Beach = require('./beach')

module.exports = React.createClass({

  render: function() {

    const beachList = this.props.beaches.map(beach => {
      return <div key={beach.name} className="col-md-4"><Beach beach={beach}/></div>
    })

    return (
      <div>
        <div className="row">
          {beachList}
        </div>
      </div>
    )
  }
})
