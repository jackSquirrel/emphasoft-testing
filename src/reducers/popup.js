const initialState = false;

export default function popup(state = initialState, action) {
    if (action.type === 'OPEN_POPUP') {
        return true;
    } else if (action.type === 'CLOSE_POPUP') {
        return false;
    }
    return state;
}