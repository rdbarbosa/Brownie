import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

//const BASE_URL = 'http://localhost:5000/api/produtos'
const BASE_URL = 'https://brownie-reis.herokuapp.com/api/produtos'
const INITIAL_VALUES = {}

export function search(){
    const request = axios.get(BASE_URL)
    return {
        type: 'PRODUTO_GETALL_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function save(values) {
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
                //resetForm('produtoForm'),
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

export function showUpdate(produto){
    return [
        initialize('produtoForm', produto)
    ]
}

// export const save = (produto) => {
//     return dispatch => {
//         axios.post(URL, produto)
//             .then(resp => dispatch(clear()))
//             .then(resp => dispatch(search()))
//     }
// }

export const remove = (produto) => {
    return dispatch => {
        axios.delete(`${BASE_URL}/${produto._id}`)
            .then(resp => dispatch(search()))
    }
}

export function init(){
    return [
        initialize('produtoForm', INITIAL_VALUES)
    ]
}

export const clear = () => {
    return [{ type: 'PRODUTO_CLEAR' }, search()]
}