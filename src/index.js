import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import appStore from 'store'

import Routes from 'routes'

import registerServiceWorker from 'utils/registerServiceWorker'

import 'styles/global-styles'
import 'bootstrap/dist/css/bootstrap.css';

render(
    <Provider store={appStore}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
