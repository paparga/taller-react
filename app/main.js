const React = require('react')
const ReactDOM = require('react-dom')
const {Route, Router, IndexRoute} = require('react-router')
const BeachList = require('./components/beach-list');

const routes = (
  <Route path='/'>
    <Route path='/beaches' component={BeachList}/>
    <IndexRoute component={BeachList}/>
  </Route>
)

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))
