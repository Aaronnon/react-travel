// import { createStore, applyMiddleware } from 'redux';
import languageReducer from "./language/languageReducer";
// import thunk from 'redux-thunk'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import { productDetailSlice } from './productDetail/slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productSearchSlice } from "./productSearch/slice";

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer

})

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export default store;