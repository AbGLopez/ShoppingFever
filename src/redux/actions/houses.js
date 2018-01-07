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
    // Función que carga del WS el listado
    return (dispatch, getState) => {

        dispatch(setHousesFetching(true))
        const fetchUrl = '/casas'

        fetch(fetchUrl).then( response => {
            dispatch(setHousesFetching(false))
            console.log("fetchHousesList response: ", response)
            const list = response.records
            dispatch(updateHousesList(list))
            
        }).catch( error => {
            dispatch(setHousesFetching(false))
            console.log("fetchHousesList error: ", error)
        })
               
    }
}