import storage from 'redux-persist/lib/storage'

// CP stands for Client Portal, use CP before any persist key
// to not persist data from Control Center(CC) by mistake

export const persistConfig = {
  key: 'cp',
  version: 1,
  storage,
  blacklist: ['auth', 'account', 'accountApi', 'featureFlag'],
  transforms: [],
}
