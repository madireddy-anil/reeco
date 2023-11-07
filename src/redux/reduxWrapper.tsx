import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Props } from '../types'

let persistor = persistStore(store)

const ReduxProvider: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
    </Provider>
  )
}

export { ReduxProvider }
