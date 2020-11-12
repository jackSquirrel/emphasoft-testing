import React from 'react';
import { connect } from 'react-redux';

class Popup extends React.Component {
    closePopup() {
        console.log('Popup is closing');
        this.props.onCloseClick();
        console.log(this.props.isOpen);
    }

    render() {
        if (this.props.isOpen) {
            return (
                <div className="popup">
                    <div className="popup__content">
                        <img src="/images/close.svg" alt="X" onClick={this.closePopup.bind(this)} className="popup__close" />
                        <h3 className="popup__title">Авторизироваться</h3>
                        <form className="popup__form" name="new" noValidate>
                            <input type="text" name="name" className="popup__input" placeholder="Имя пользователя" required />
                            <span id="name" className="popup__error"></span>
                            <input type="password" name="password" className="popup__input" placeholder="Пароль" required />
                            <span id="password" className="popup__error"></span>
                            <button className="popup__button add__button">Войти</button>
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