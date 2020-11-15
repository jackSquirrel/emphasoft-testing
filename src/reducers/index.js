import { combineReducers } from 'redux';

import isPopupOpen from './popup';
import isLoggedIn from './isLoggedIn';

export default combineReducers({
    isPopupOpen,
    isLoggedIn
});