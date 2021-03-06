import * as types from '../types/characters'
import { fetch, post, remove } from 'ShoppingFever/src/webservices/webservices'
import { Actions } from 'react-native-router-flux'

function updateCharactersList(value) { 
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value: value
    }
}

function setCharactersFetching(value) {
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value: value
    }
}

export function updateCharacterSelected(character) {
    return {
        type: types.CHARACTERS_UPDATE_CHARACTER,
        character: character
    }
}

export function fetchCharactersList(houseId) {
    return (dispatch, getState) => {

        // Forma alternativa de acceder al state global
        // const state = getState()
        // const houseIdAlternativo = state.houses.item ? state.houses.item.id : null

        dispatch(setCharactersFetching(true))
        dispatch(updateCharactersList([]))
        console.log('mme llega de la casa..', houseId)
        const fetchUrl = 'https://api.marketcloud.it/v0/products?category=/' + houseId
        fetch( fetchUrl ).then(response => {

            console.log("fetchCharactersList response: ", response)
            dispatch(setCharactersFetching(false))
            dispatch(updateCharactersList(response.data)) // Actualizamos el reducer con el listado

        }).catch( error => {

            console.log("fetchCharactersList error: ", error)
            dispatch(setCharactersFetching(false))

        })
    }
}

export function deleteCharacter(character) {
    return (dispatch, getState) => {

        dispatch(setCharactersFetching(true))
        const state = getState()
        const house = state.houses.item
        console.log('se elimina el producto', character)
        const fetchUrl = 'https://api.marketcloud.it/v0/products/' + character.id
        remove( fetchUrl ).then( response => {

            dispatch(setCharactersFetching(false))

            console.log("deleteCharacter response: ", response)

            if (response.status && response.status == "ok") {
                dispatch(fetchCharactersList(house.id))
                dispatch(updateCharacterSelected(null))
                Actions.pop()
            }

        }).catch( error => {

            dispatch(setCharactersFetching(false))
            console.log("deleteCharacter error: ", error)

        })
        
    }
}

export function postCharacter(data) {
    return (dispatch, getState) => {

        dispatch(setCharactersFetching(true))
        const state = getState()
        const house = state.houses.item

        const fetchUrl = ' http://api.marketcloud.it/v0/products'
        console.log('data para meter products', data)
        post(fetchUrl, data).then( response => {

            dispatch(setCharactersFetching(false))
            console.log("postCharacter response: ", response)

            if (response.data) {
                dispatch(fetchCharactersList(house.id))
                dispatch(updateCharacterSelected(null))
                Actions.pop()
            }

        }).catch( error => {
            dispatch(setCharactersFetching(false))
            console.log("postCharacter error: ", error)
        })
    }
} 