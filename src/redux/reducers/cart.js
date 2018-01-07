import * as types from '../types/cart'

const initialState = {
    isFetching: false,
    list: [],
    item: null,
}

export default function reducer( state = initialState, action = {} ) {

    switch (action.type) {
        
        case types.CART_UPDATE_LIST: 
            return {
                ...state,
                list: action.value,
            };

        case types.CART_UPDATE_CART_PRODUCT:
            return {
                ...state,
                item: action.character,
            }

        case types.CART_SET_FETCHING:
            return {
                ...state,
                isFetching: action.value,
            }

        default:
            return state;

    }
        
}