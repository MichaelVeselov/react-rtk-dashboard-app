import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import { combineReducers } from 'redux';

import { filterReducer } from './features/filter/filterSlice';
import { positionReducer } from './features/positions/positionSlice';

const rootReducer = combineReducers({
  filters: filterReducer,
  positions: positionReducer,
});

const persistConfig = {
  key: 'dashboard-app-rtk',
  storage,
  whitelist: ['filters', 'positions'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  enhancers: [],
});

export const persistor = persistStore(store);
