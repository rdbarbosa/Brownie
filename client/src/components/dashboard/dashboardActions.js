import axios from 'axios'

//const BASE_URL = 'http://localhost:5000/api' //http://localhost:3003/api/clientes/count
const BASE_URL = 'https://brownie-reis.herokuapp.com/api'

export function getTotal(){
    const request = axios.get(`${BASE_URL}/clientes/count`)
    return {
        type: 'CLIENTE_TOTAL_FETCHED',
        payload: request
    }
}