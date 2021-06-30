import { createAction } from "@reduxjs/toolkit"

export const GET_PRODUCTS = {
    REQUEST: 'GET_PRODUCTS/REQUEST',
    SUCCESS: 'GET_PRODUCTS/SUCCESS',
    ERROR: 'GET_PRODUCTS/ERROR'
}

export const getProductsRequest = createAction(GET_PRODUCTS.REQUEST)
export const getProductsSuccess = createAction(GET_PRODUCTS.SUCCESS)
export const getProductsError = createAction(GET_PRODUCTS.ERROR)

export const WATCH_GET_PRODUCTS = 'WATCH_GET_PRODUCTS'
export const watchGetProducts = createAction(WATCH_GET_PRODUCTS)