import { all, call, put, takeLatest } from 'redux-saga/effects'
import axiosInstance from '../services/http'
import { addToCart, filterProducts, getProductsError, getProductsRequest, getProductsSuccess, WATCH_CART, WATCH_FILTER_PRODUCTS, WATCH_GET_PRODUCTS } from './action'

export function* getProducts() {
    yield put(getProductsRequest())
    try {
        const { data } = yield call(() => axiosInstance())
        yield put(getProductsSuccess(data))
    }
    catch (error) {
        yield put(getProductsError(error.message))
    }
}

export function* cartAddItem({ payload }) {
    yield put(addToCart(payload))
}

export function* filterProductsList({ payload }) {
    yield put(filterProducts(payload))
}

export function* watchSaga() {
    yield takeLatest(WATCH_GET_PRODUCTS, getProducts)
    yield takeLatest(WATCH_CART.ADD_ITEM, cartAddItem)
    yield takeLatest(WATCH_FILTER_PRODUCTS, filterProductsList)
}

export function* rootSaga() {
    yield all([
        watchSaga()
    ])
}