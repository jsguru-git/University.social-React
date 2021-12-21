import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import appStore from 'store'

import Routes from 'routes'

import registerServiceWorker from 'utils/registerServiceWorker'

import 'styles/global-styles'
import 'bootstrap/dist/css/bootstrap.css'

render(
  <MuiThemeProvider>
    <Provider store={appStore}>
      <Routes />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
