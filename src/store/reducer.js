import { GET_PRODUCTS } from "./action"

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
