import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import connect from './src/state/atomConnector'
import App from './src/views/App'
import FourOhFour from './src/views/FourOhFour'

const mapStateToProps = (state) => ({ browserHistory: state.browserHistory })

const AppRouter = connect(mapStateToProps)(({ browserHistory }) => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
))

ReactDOM.render(<AppRouter />, document.getElementById('root'))
