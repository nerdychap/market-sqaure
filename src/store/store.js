import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { cartReducer, filterReducer, productsReducer } from "./reducer";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware()

const allReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    textFilter: filterReducer
})

export const store = createStore(allReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
