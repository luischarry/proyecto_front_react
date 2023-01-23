
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/User/userSlice';
import serieSlice from '../pages/serieSlice';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';
const reducers = combineReducers({
    user: userSlice,
    serie: serieSlice
})
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
    reducer: {
        user: userSlice,
        serie: serieSlice
    }
    
});