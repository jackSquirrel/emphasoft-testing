const initialState = {
    popupSignIn: false,
    popupLoggedIn: false
};

export default function popup(state = initialState, action) {
    if (action.type === 'OPEN_SIGNIN_POPUP') {
        return {
            popupSignIn: true,
            popupLoggedIn: false
        };
    } else if (action.type === 'OPEN_LOGGEDIN_POPUP') {
        return {
            popupSignIn: false,
            popupLoggedIn: true
        }
    } else if (action.type === 'CLOSE_POPUP') {
        return {
            popupSignIn: false,
            popupLoggedIn: false
        }
    }
    return state;
}