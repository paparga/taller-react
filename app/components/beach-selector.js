const React = require('react')
const Beach = require('./beach')

module.exports = function({beaches}) {

    const beachList = beaches.map(beach => {
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
