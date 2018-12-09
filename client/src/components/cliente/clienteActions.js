import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

// const BASE_URL = 'http://localhost:5000/api/clientes'
const BASE_URL = 'https://brownie-reis.herokuapp.com/api/clientes'
const INITIAL_VALUES = {produtos:[{}]}

export const change = (event) => ({
    type: 'VALUE_CHANGED',
    payload: event.target.value
})

// export const search = () => {
//     return dispatch =>{
//         axios.get(`${URL}?sort=-createdAt`)
//             .then(resp => dispatch({type: 'CLIENTE_SEARCHED', payload: resp.data}))
//     }
// }

export function search(){
    const request = axios.get(BASE_URL)
    return {
        type: 'CLIENTE_GETALL_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function save(values){
    const id = values._id ? values._id : ''
    if (id) {
        return submit(values, 'put')
    } else {
        return submit(values, 'post')
    }
}

export function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso!')
            dispatch([
                resetForm('clienteForm'),
                search()
            ])
        })
        .catch(e => {
            const m = e.response.data.errors
            console.log(m)
            //e.response.data.errors.forEach(error => toastr.error('Erro', error));
        })
    }
}

export function showUpdate(cliente){
    return [
        initialize('clienteForm', cliente)
    ]
}

// export const save = (cliente) => {
//     return dispatch => {
//         axios.post(URL, cliente)
//             .then(resp => dispatch(clear()))
//             .then(resp => dispatch(search()))
//     }
// }

export const remove = (cliente) => {
    return dispatch => {
        axios.delete(`${BASE_URL}/${cliente._id}`)
            .then(resp => dispatch(search()))
    }
}

export function init(){
    return [
        initialize('clienteForm', INITIAL_VALUES)
    ]
}

export const clear = () => {
    return [{ type: 'CLIENTE_CLEAR' }, search()]
}

export const novo = () => {
    return [{ type: 'CLIENTE_CLEAR' }]
}