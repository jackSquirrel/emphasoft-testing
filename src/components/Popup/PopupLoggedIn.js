import React from 'react';
import { connect } from 'react-redux';
import PopupClose from './PopupClose';

class PopupLoggedIn extends React.Component {
    // Закрыть попап
    _closePopup() {
        this.props.toClosePopup();
    }

    // Попап при успешной авторизации
    render() {
        return (
            <div className="popup__content">
                <PopupClose />
                <h3 className="popup__title popup__title_succes">Пользователь успешно авторизирован!</h3>
                <button type="button" className="popup__button"  onClick={this._closePopup.bind(this)}>Ок</button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        toClosePopup: () => {
            dispatch({ type: 'CLOSE_POPUP' })
        }
    })
)(PopupLoggedIn);