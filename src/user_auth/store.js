import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // or another storage engine

import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root', // The key to use for storing data in storage
  storage, // Use the storage engine (localStorage, AsyncStorage, etc.)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
