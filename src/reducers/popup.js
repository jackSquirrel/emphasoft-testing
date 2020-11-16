const initialState = {
    popupSignIn: false,
    popupLoggedIn: false,
    popupError: false
};

export default function popup(state = initialState, action) {
    // Открытие попапа для авторизации
    if (action.type === 'OPEN_SIGNIN_POPUP') {
        return {
            popupSignIn: true,
            popupLoggedIn: false,
            popupError: false
        };
    // Открытие попапа успешной авторизации
    } else if (action.type === 'OPEN_LOGGEDIN_POPUP') {
        return {
            popupSignIn: false,
            popupLoggedIn: true,
            popupError: false
        }
    // Открытие попапа с ошибкой
    } else if (action.type === 'OPEN_ERROR_POPUP') {
        return {
            popupSignIn: false,
            popupLoggedIn: false,
            popupError: true
        }
    // Закрытие попапа
    } else if (action.type === 'CLOSE_POPUP') {
        return {
            popupSignIn: false,
            popupLoggedIn: false,
            popupError: false
        }
    }
    return state;
}