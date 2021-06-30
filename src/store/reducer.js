import { CART, FILTER_PRODUCTS, GET_PRODUCTS } from "./action"

const initialState = {
    data: [],
    error: null,
    isLoading: false
}

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS.REQUEST:
            return { data: [], error: null, isLoading: true }
        case GET_PRODUCTS.SUCCESS:
            return { data: payload, error: null, isLoading: false }
        case GET_PRODUCTS.ERROR:
            return { ...state, error: payload, isLoading: false }
        default:
            return state
    }
}

export const cartReducer = (state = [], { type, payload }) => {
    let oldCart = [...state]
    switch (type) {
        case CART.ADD_ITEM:
            const isFound = oldCart.find(({id}) => payload.id === id)
            if (!isFound){
                return [...state, payload]
            }
            return state
        default:
            return state
    }
}

export const filterReducer = (state = '', {type, payload}) => {
    switch (type) {
        case FILTER_PRODUCTS:
            return payload
        default:
            return state
    }
}
