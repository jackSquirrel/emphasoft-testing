import React from 'react';
import { connect } from 'react-redux';
import PopupSignIn from './PopupSignIn';
import PopupLoggedIn from './PopupLoggedIn';

class Popup extends React.Component {
    constructor(props){
        super(props);
        this.signInCallback = props.signInCallback;
    }

    closePopup() {
        this.props.onCloseClick();
    }

    render() {
        return (
            <div className="popup">
                {this.props.isSignInPopupOpen ? <PopupSignIn signInCallback={ this.signInCallback }/> : <PopupLoggedIn /> }
            </div>
        )
    }
}

export default connect (
    state => ({
        isSignInPopupOpen: state.isPopupOpen.popupSignIn,
        isLoggedInPopupOpen: state.isPopupOpen.popupLoggedIn
    }),
    dispatch => ({
        onCloseClick: () => {
            dispatch({ type: 'CLOSE_POPUP' })
        }
    })
)(Popup);