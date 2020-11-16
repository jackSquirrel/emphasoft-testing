import React from 'react';
import { connect } from 'react-redux';
import PopupClose from './PopupClose';

class PopupError extends React.Component {
    // Открыть попап для авторизации
    _signIn() {
        this.props.onAuthButton();
    }

    // Попап ошибки с просьбой авторизироваться
    render() {
        return (
            <div className="popup__content">
                <PopupClose />
                <h3 className="popup__title">Авторизируйтесь, чтобы посмотреть список пользователей</h3>
                <button type="button" className="popup__button"  onClick={this._signIn.bind(this)}>Авторизироваться</button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        onAuthButton: () => {
            dispatch({ type: 'OPEN_SIGNIN_POPUP' })
        }
    })
)(PopupError);