const initialState = false;

export default function loggingin(state = initialState, action) {
    if (action.type === 'ENTERED') {
        return true;
    } else if (action.type === 'QUITE') {
        return false;
    }
    return state;
}