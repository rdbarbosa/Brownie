const INITIAL_STATE = { total: {value: 0}}

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'CLIENTE_TOTAL_FETCHED':
            return { ...state, total: action.payload.data }
        default:
            return state
    }
}