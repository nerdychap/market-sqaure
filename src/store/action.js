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

export const CART = {
    ADD_ITEM: 'CART/ADD_ITEM',
    REMOVE_ITEM: 'CART/REMOVE_ITEM',
    CLEAR: 'CART/CLEAR'
}

export const addToCart = createAction(CART.ADD_ITEM)

export const WATCH_CART = {
    ADD_ITEM: 'WATCH_CART/ADD_ITEM',
    REMOVE_ITEM: 'WATCH_CART/REMOVE_ITEM',
    CLEAR: 'WATCH_CART/CLEAR'
}

export const watchCartAddItem = createAction(WATCH_CART.ADD_ITEM)
export const watchCartRemoveItem = createAction(WATCH_CART.REMOVE_ITEM)
export const watchCartClear = createAction(WATCH_CART.CLEAR)

export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
export const filterProducts = createAction(FILTER_PRODUCTS)

export const WATCH_FILTER_PRODUCTS = 'WATCH_FILTER_PRODUCTS'
export const watchFilterProducts = createAction(WATCH_FILTER_PRODUCTS)

