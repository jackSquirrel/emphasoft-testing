import React from 'react';
import { connect } from 'react-redux';

class PopupSignIn extends React.Component {
    constructor(props) {
        super(props);
        this._signInCallback = props.signInCallback;
        this.state = {
            isUserNameValid: false,
            isPasswordValid: false,
            isFormValid: false
        }
    }

    _signIn(event) {
        event.preventDefault();
        this._signInCallback(this._username.value, this._password.value)
            .then((res) => {
                if(res.non_field_errors) {
                    this._buttonError.textContent = 'Неправильный пароль или имя пользователя'
                } else if(res.token) {
                    console.log()
                    this.props.onEntering();
                    this.props.onLoggingIn();
                }
            })
    }

    render() {
        return (
            <div className="popup__content">
                <img src="/images/close.svg" alt="X" onClick={this.props.onCloseClick} className="popup__close" />
                <h3 className="popup__title">Авторизироваться</h3>
                <form className="popup__form" name="new" noValidate>
                    <input type="text" name="name" className="popup__input" placeholder="Имя пользователя" ref={(input) => {this._username = input}} required />
                    <span id="name" className="popup__error"></span>
                    <input type="password" name="password" className="popup__input" placeholder="Пароль" ref={(input) => {this._password = input}} required />
                    <span id="password" className="popup__error"></span>
                    <span id="enter" className="popup__button-error" ref={(span) => {this._buttonError = span}}></span>
                    <button name="enter" className="popup__button" onClick={this._signIn.bind(this)}>Войти</button>
                </form>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        onCloseClick: () => {
            dispatch({ type: 'CLOSE_POPUP' })
        },
        onLoggingIn: () => {
            dispatch({ type: 'OPEN_LOGGEDIN_POPUP' })
        },
        onEntering: () => {
            dispatch({ type: 'ENTERED' })
        }
    })
)(PopupSignIn);