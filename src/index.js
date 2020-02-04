import React from 'react'
import ReactDOM from 'react-dom'

import '@u/rem'

import './styles/base.scss'
import App from './App'


// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
