import { combineReducers } from 'redux';

import isPopupOpen from './popup';
import isLoggedIn from './isLoggedIn';
import users from './users';
import filterUsers from './filterUsers';

export default combineReducers({
    isPopupOpen,
    isLoggedIn,
    users,
    filterUsers
});