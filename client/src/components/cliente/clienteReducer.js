const INITIAL_STATE = { cliente: {nome: '', email: ''}, list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'VALUE_CHANGED':
            return { ...state, cliente: {nome: action.payload, email: action.payload} }
        case 'CLIENTE_GETALL_FETCHED':
            return { ...state, list: action.payload.data }
        case 'CLIENTE_SEARCHED':
            return { ...state, list: action.payload }
        case 'CLIENTE_CLEAR':
            return { ...state, cliente: {}}
        default:
            return state
    }
}