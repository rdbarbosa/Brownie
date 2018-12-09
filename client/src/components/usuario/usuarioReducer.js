const INITIAL_STATE = { usuario: {nome: '', email: ''}, list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USUARIO_GETALL_FETCHED':
            return { ...state, list: action.payload.data }
        case 'USUARIO_SEARCHED':
            return { ...state, list: action.payload }
        case 'USUARIO_CLEAR':
            return { ...state, usuario: {nome: '', email: ''} }
        default:
            return state
    }
}