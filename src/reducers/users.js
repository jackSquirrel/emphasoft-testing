const initialState = {
    usersList: [],
    usersAreShown: false
};

export default function users(state = initialState, action) {
    if (action.type === 'ADD_USER'){
        return {
            usersList: [
            ...state.usersList,
            action.payload
            ],
            usersAreShown: true
        }
    } else if (action.type === 'CLEAR_USERLIST') {
        return {
            usersList: [],
            usersAreShown: false
        }
    }
    return state;
}