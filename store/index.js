import { createStore, applyMiddleware, compose } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk)
  )
)
export const persistor = persistStore(store)