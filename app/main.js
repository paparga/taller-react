const React = require('react')
const ReactDOM = require('react-dom')
const {Route, Router, IndexRoute} = require('react-router')
const BeachList = require('./components/beach-list')
const OneBeach = require('./components/one-beach')
const form = require('./modules/form')

const routes = (
  <Route path='/'>
    <Route path='/beaches' component={BeachList}/>
    <Route path='/beaches/:id' component={OneBeach}/>
    <IndexRoute component={BeachList}/>
  </Route>
)

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))
