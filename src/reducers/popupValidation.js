const initialState = {
    isUsernameValid: false,
    isPasswordValid: false
}

export default function popupValidation(state = initialState, action) {
    if (action.type === 'USERNAME_VALID'){
        return { ...state, isUsernameValid: true };
    } else if (action.type === 'USERNAME_UNVALID'){
        return { ...state, isUsernameValid: false };
    } else if (action.type === 'PASSWORD_VALID'){
        return { ...state, isPasswordValid: true };
    } else if (action.type === 'PASSWORD_UNVALID'){
        return { ...state, isPasswordValid: false };
    }
    return state;
}   