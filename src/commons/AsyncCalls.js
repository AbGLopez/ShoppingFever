import axios from 'axios'

export function fetchHousesList() {
    
    return new Promise(function(resolve, reject) {
        
        const fetchUrl = '/casas'
        axios.get(fetchUrl)        
        .then((response) => {
            console.log("axios get response: ", response);
            const nuestraLista = response.data && response.data.records ? response.data.records : []
            resolve(nuestraLista)
        })
        .catch((error) => {
            console.log("axios get error: ", error);
            reject(error)
        });
    })
}
