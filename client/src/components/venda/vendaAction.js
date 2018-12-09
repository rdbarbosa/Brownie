import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

// const BASE_URL = 'http://localhost:5000/api/vendas'
const BASE_URL = 'https://brownie-reis.herokuapp.com/api/vendas'
const INITIAL_VALUES = {}

export const change = (event) => ({
    type: 'VENDA_SEARCH_CHANGED',
    payload: event.target.value
})

export function search(){
    const request = axios.get(BASE_URL)
    return {
        type: 'VENDA_GETALL_FETCHED',
        payload: request
    }
}

export function init(){
    return [
        initialize('vendaForm', INITIAL_VALUES)
    ]
}


export function showUpdate(cliente){
    return [
        initialize('clienteForm', cliente)
    ]
}

export const remove = (cliente) => {
    return dispatch => {
        axios.delete(`${BASE_URL}/${cliente._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'VENDA_CLEAR' }, search()]
}

export const novo = () => {
    return [{ type: 'VENDA_CLEAR' }]
}