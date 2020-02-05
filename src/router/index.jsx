import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Link
} from 'react-router-dom'

import Index from '@v/index'
import Demo from '@v/demo'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/demo" component={Demo} />
    </Switch>
  </Router>
)
