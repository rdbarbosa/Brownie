import axios from 'axios'

//const BASE_URL = 'http://localhost:5000/api/usuarios'
const BASE_URL = 'https://brownie-reis.herokuapp.com/api/usuarios'

export const change = event => ({
    type: 'USUARIO_VALUE_CHANGED',
    payload: event.target.value
})

export function search(){
    const request = axios.get(BASE_URL)
    return {
        type: 'USUARIO_GETALL_FETCHED',
        payload: request
    }
}

export const save = (usuario) => {
    //const method = usuario._id ? 'put' :  'post'
    //const url = usuario._id ?  `${BASE_URL}/${usuario._id}` : BASE_URL
    return dispatch => {
        //axios[method](url, usuario)
        axios.post(BASE_URL, usuario)
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const remove = (usuario) => {
    return dispatch => {
        axios.delete(`${URL}/${usuario._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'USUARIO' }, search()]
}

export function create(values) {
    console.log(values)
}