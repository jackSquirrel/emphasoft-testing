const initialState = {
    usersList: [],
    usersAreShown: false
};

export default function users(state = initialState, action) {
    // Добавление полученного с сервера пользователя в массив
    if (action.type === 'ADD_USER'){
        return {
            usersList: [
            ...state.usersList,
            action.payload
            ],
            usersAreShown: true
        }
    // Очистка массива при выходе из аккаунта
    } else if (action.type === 'CLEAR_USERLIST') {
        return {
            usersList: [],
            usersAreShown: false
        }
    }
    return state;
}