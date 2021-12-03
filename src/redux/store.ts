import { createStore, applyMiddleware } from 'redux';
import languageReducer from "./language/languageReducer";
import thunk from 'redux-thunk'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import { productDetailSlice } from './productDetail/slice'
import { combineReducers,  } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>

export default store;