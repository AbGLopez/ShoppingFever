import * as types from '../types/cart'
import { fetch, post, remove } from 'ShoppingFever/src/webservices/webservices'
import { Actions } from 'react-native-router-flux'

function updateCart(value) { 
    return {
        type: types.CART_UPDATE_LIST,
        value: value
    }
}

function setCartFetching(value) {
    return {
        type: types.CART_SET_FETCHING,
        value: value
    }
}

export function updateCartSelected(character) {
    return {
        type: types.CART_UPDATE_CART_PRODUCT,
        character: character
    }
}

export function fetchCartList(houseId) {
    return (dispatch, getState) => {

        // Forma alternativa de acceder al state global
        // const state = getState()
        // const houseIdAlternativo = state.houses.item ? state.houses.item.id : null

        dispatch(setCartFetching(true))
        dispatch(updateCart([]))
        const fetchUrl = 'https://api.marketcloud.it/v0/carts'
       
        fetch( fetchUrl ).then(response => {

            console.log("fetchCartList response: ", response.data)
            dispatch(setCartFetching(false))
            dispatch(updateCart(response.data)) // Actualizamos el reducer con el listado

        }).catch( error => {

            console.log("fetchCartList error: ", error)
            dispatch(setCartFetching(false))

        })
    }
}

export function deleteCart(character) {
    return (dispatch, getState) => {

        dispatch(setCartFetching(true))
        const state = getState()
        const house = state.houses.item

        const fetchUrl = '/personajes/' + character.id
        remove( fetchUrl ).then( response => {

            dispatch(setCartFetching(false))

            console.log("deleteCart response: ", response)

            if (response.status && response.status == "ok") {
                dispatch(fetchCartList(house.id))
                dispatch(updateCartSelected(null))
                Actions.pop()
            }

        }).catch( error => {

            dispatch(setCartFetching(false))
            console.log("deleteCart error: ", error)

        })
        
    }
}

export function postCart(data) {
    return (dispatch, getState) => {

        dispatch(setCartFetching(true))
        const state = getState()
        const house = state.houses.item
        console.log('data', data)

        // const fetchUrl = '/personajes'
        // post(fetchUrl, data).then( response => {

        //     dispatch(setCartFetching(false))
        //     console.log("postCart response: ", response)

        //     if (response.record) {
        //         dispatch(fetchCartList(house.id))
        //         dispatch(updateCartSelected(null))
        //         Actions.pop()
        //     }

        // }).catch( error => {
        //     dispatch(setCartFetching(false))
        //     console.log("postCart error: ", error)
        // })
    }
} 