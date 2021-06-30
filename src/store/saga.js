import { all, call, put, takeLatest } from 'redux-saga/effects'
import axiosInstance from '../services/http'
import { getProductsError, getProductsRequest, getProductsSuccess, WATCH_GET_PRODUCTS } from './action'

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

export function* watchSaga() {
    yield takeLatest(WATCH_GET_PRODUCTS, getProducts)
}

export function* rootSaga() {
    yield all([
        watchSaga()
    ])
}