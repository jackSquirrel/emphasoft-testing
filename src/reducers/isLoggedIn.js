const initialState = false;

export default function loggingin(state = initialState, action) {
    // Пользователь вошел в систему
    if (action.type === 'ENTERED') {
        return true;
    // Пользователь вышел из системы
    } else if (action.type === 'QUITE') {
        localStorage.removeItem('token');
        return false;
    }
    return state;
}