import React from 'react';
import { connect } from 'react-redux';

class Popup extends React.Component {
    constructor(props){
        super(props);
        this._signInCallback = props.signInCallback;
    }

    _closePopup() {
        this.props.onCloseClick();
    }

    _signIn(event) {
        event.preventDefault();
        console.log('signIn Request');
        this._signInCallback(this._username.value, this._password.value)
            .then((res) => {
                if(res.non_field_errors) {
                    this._buttonError.textContent = 'Неправильный пароль или имя пользователя'
                } else if(res.token) {
                    this._closePopup();
                    console.log('Войдено ;)')
                }
            })
    }

    render() {
        if (this.props.isOpen) {
            return (
                <div className="popup">
                    <div className="popup__content">
                        <img src="/images/close.svg" alt="X" onClick={this._closePopup.bind(this)} className="popup__close" />
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
                </div>
            )
        }
        return null;
    }
}

export default connect (
    state => ({
        isOpen: state.isPopupOpen
    }),
    dispatch => ({
        onCloseClick: () => {
            dispatch({ type: 'CLOSE_POPUP' })
        }
    })
)(Popup);