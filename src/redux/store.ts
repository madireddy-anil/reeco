import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'

/**
 *  Service imports
 */
import { reecoApi } from '../services/reecoService'

/**
 *  Slice imports
 */
import reecoReducer from '../config/reecoSlice'

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import { persistConfig } from './persistorConfiguration'

const rootReducer = {
  // reducers and persistor
  reeco: persistReducer(persistConfig, reecoReducer),

  // reducers apis
  [reecoApi.reducerPath]: reecoApi.reducer,
}

const combinedRootReducers = combineReducers(rootReducer)
const persistedReducer = persistReducer(persistConfig, combinedRootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  enhancers: [],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(reecoApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
