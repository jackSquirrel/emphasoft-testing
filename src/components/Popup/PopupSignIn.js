import React from 'react';
import { connect } from 'react-redux';
import PopupClose from './PopupClose';

class PopupSignIn extends React.Component {
    constructor(props) {
        super(props);
        this._signInCallback = props.signInCallback;
        this._validation = this._validation.bind(this);
        this.state = {
            isUsernameValid: false,
            isPasswordValid: false,
            isFormValid: false
        }
    }

    _validation(event) {
       if(event.target.name === 'name') {
            if(this._username.value.length === 0) {
                this._usernameError.textContent = 'Это обязательное поле';
                this.setState((state)=>{return {...state, isUsernameValid: false}})
            } else {
                this._usernameError.textContent = '';
                this.setState((state)=>{return {...state, isUsernameValid: true}})
            }
       } else if(event.target.name === 'password') {
            if(this._password.value.length === 0) {
                this._passwordError.textContent = 'Это обязательное поле';
                this.setState((state)=>{return {...state, isPasswordValid: false}})
            } else {
                this._usernameError.textContent = '';
                this.setState((state)=>{return {...state, isPasswordValid: true}})
            }
       }
       this.setState((state)=>{return {...state, isFormValid: state.isPasswordValid && state.isUsernameValid}})
    }

    // Авторизация пользователя
    _signIn(event) {
        event.preventDefault();
        this._signInCallback(this._username.value, this._password.value)
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
                    <input type="text" name="name" className="popup__input" placeholder="Имя пользователя" ref={(input) => {this._username = input}} onChange={this._validation} />
                    <span id="name" className="popup__error" ref={(span) => {this._usernameError = span}}></span>
                    <input type="password" name="password" className="popup__input" placeholder="Пароль" ref={(input) => {this._password = input}} onChange={this._validation} />
                    <span id="password" className="popup__error" ref={(span) => {this._passwordError = span}}></span>
                    <span id="enter" className="popup__button-error" ref={(span) => {this._buttonError = span}}></span>
                    <button name="enter" className={this.state.isFormValid ? "popup__button" : "popup__button-disable"} onClick={this._signIn.bind(this)} disabled={!this.state.isFormValid}>Войти</button>
                </form>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        onLoggingIn: () => {
            dispatch({ type: 'OPEN_LOGGEDIN_POPUP' })
        },
        onEntering: () => {
            dispatch({ type: 'ENTERED' })
        }
    })
)(PopupSignIn);