import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
let persistor = persistStore(store)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <App />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
