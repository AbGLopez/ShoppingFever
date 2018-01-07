import * as types from '../types/houses'
import { fetch, post } from 'ShoppingFever/src/webservices/webservices'


function updateHousesList(value) { 
    // Función que devuelve el action que actualiza el reducer
    return {
        type: types.HOUSES_UPDATE_LIST,
        value: value
    }
}

function setHousesFetching(value) {
    return {
        type: types.HOUSES_SET_FETCHING,
        value: value
    }
}

export function updateHouseSelected(value) {
    return {
        type: types.HOUSES_UPDATE_HOUSE,
        value
    }
}

export function fetchHousesList() {
    // Cargamos las categorias de producto del WS
    return (dispatch, getState) => {

        dispatch(setHousesFetching(true))
        const fetchUrl = 'https://api.marketcloud.it/v0/categories'

        fetch(fetchUrl).then( response => {
            dispatch(setHousesFetching(false))
            //console.log("fetchHousesList response: ", response)
            
            const list = response.data
            dispatch(updateHousesList(list))
            
        }).catch( error => {
            dispatch(setHousesFetching(false))
            console.log("fetchHousesList error: ", error)
        })
               
    }
}