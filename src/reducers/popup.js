const initialState = {
    popupSignIn: false,
    popupLoggedIn: false,
    popupError: false
};

export default function popup(state = initialState, action) {
    if (action.type === 'OPEN_SIGNIN_POPUP') {
        return {
            popupSignIn: true,
            popupLoggedIn: false,
            popupError: false
        };
    } else if (action.type === 'OPEN_LOGGEDIN_POPUP') {
        return {
            popupSignIn: false,
            popupLoggedIn: true,
            popupError: false
        }
    } else if (action.type === 'OPEN_ERROR_POPUP') {
        return {
            popupSignIn: false,
            popupLoggedIn: false,
            popupError: true
        }
    } else if (action.type === 'CLOSE_POPUP') {
        return {
            popupSignIn: false,
            popupLoggedIn: false,
            popupError: false
        }
    }
    return state;
}