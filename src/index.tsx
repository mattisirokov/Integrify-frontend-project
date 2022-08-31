import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import ColorModeProvider from './context/ColorModeContext'
import * as serviceWorker from './serviceWorker'
import { store } from './redux/store'

const WithProvider = () => (
  <Provider store={store}>
    <ColorModeProvider>
      <Router>
        <App />
      </Router>
    </ColorModeProvider>
  </Provider>
)

ReactDOM.render(<WithProvider />, document.getElementById('root'))

serviceWorker.unregister()
