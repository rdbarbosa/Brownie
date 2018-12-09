const INITIAL_STATE = { venda: { }, list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'VENDA_SEARCH_CHANGED':
            return state
        case 'VENDA_GETALL_FETCHED':
            return { ...state, list: action.payload.data }
        case 'VENDA_SEARCHED':
            return { ...state, list: action.payload }
        case 'VENDA_CLEAR':
            return state
        default:
            return state
    }
}