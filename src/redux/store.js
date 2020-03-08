// redux imports
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { combineReducers } from 'redux'
import { PhoneReducer } from './PhoneReducer'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

// redux store configuration
const reducer = combineReducers({
  PhoneReducer: PhoneReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, reducer)
const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
})

let persistor = persistStore(store)

export { store, persistor }
