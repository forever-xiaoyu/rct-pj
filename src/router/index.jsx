import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'

import Index from '@v/index'

export default () => (
  <Router>
    <Route path="/" component={Index} />
  </Router>
)
