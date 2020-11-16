import React from 'react';
import { connect } from 'react-redux';
import PopupClose from './PopupClose';
import PopupInput from './PopupInput';

class PopupSignIn extends React.Component {
    constructor(props) {
        super(props);
        this._signInCallback = props.signInCallback;
    }

    // Авторизация пользователя
    _signIn(event) {
        event.preventDefault();
        const username = document.querySelector('input[name=name]').value;
        const password = document.querySelector('input[name=password]').value;
        this._signInCallback(username, password)
            .then((res) => {
                if(res.non_field_errors) {
                    this._buttonError.textContent = 'Неправильный пароль или имя пользователя'
                } else if(res.token) {
                    localStorage.setItem('token', res.token)
                    this.props.onEntering();
                    this.props.onLoggingIn();
                }
            })
    }

    render() {
        return (
            <div className="popup__content">
                <PopupClose />
                <h3 className="popup__title">Авторизироваться</h3>
                <form className="popup__form" name="new">
                    <PopupInput name="name" placeholder="Имя пользователя" />
                    <PopupInput name="password" placeholder="Пароль" />
                    <span id="enter" className="popup__button-error" ref={(span) => {this._buttonError = span}}></span>
                    <button name="enter" className={this.props.isFormValid ? "popup__button" : "popup__button-disable"} onClick={this._signIn.bind(this)} disabled={!this.props.isFormValid}>Войти</button>
                </form>
            </div>
        )
    }
}

export default connect(
    state => ({
        isFormValid: (state.popupValidation.isUsernameValid && state.popupValidation.isPasswordValid)
    }),
    dispatch => ({
        onLoggingIn: () => {
            dispatch({ type: 'OPEN_LOGGEDIN_POPUP' })
        },
        onEntering: () => {
            dispatch({ type: 'ENTERED' })
        }
    })
)(PopupSignIn);