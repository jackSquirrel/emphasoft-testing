import React from 'react';
import { connect } from 'react-redux';

class PopupLoggedIn extends React.Component {

    render() {
        return (
            <div className="popup__content">
                <img src="/images/close.svg" alt="X" className="popup__close" onClick={this.props.toClosePopup}/>
                <h3 className="popup__title popup__title_succes">Пользователь успешно авторизирован!</h3>
                <button type="button" className="popup__button"  onClick={this.props.toClosePopup}>Ок</button>
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