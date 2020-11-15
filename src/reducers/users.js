const initialState = [];

export default function users(state = initialState, action) {
    if (action.type === 'ADD_USER'){
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}