const INITIAL_STATE = { produto: {}, list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'VALUE_CHANGED':
            return { ...state }
        case 'PRODUTO_GETALL_FETCHED':
            return { ...state, list: action.payload.data }
        case 'PRODUTO_SEARCHED':
            return { ...state, list: action.payload }
        case 'PRODUTO_CLEAR':
            return { ...state, produto: {}}
        default:
            return state
    }
}