import React from 'react'
import ReactDOM from 'react-dom/client'
//Main Component
import App from './App'
import './index.css'
//Redux
import store from './store'
import { Provider } from'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
