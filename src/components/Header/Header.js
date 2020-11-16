import React from 'react';
import { connect } from 'react-redux';
import HeaderButton from './HeaderButton';

class Header extends React.Component {

    // Выход из аккаунта
    _quite() {
        this.props.onQuiteClick();
    }

    // Открытие попапа для авторизации
    _openPopup() {
        this.props.onOpenClick();
    }

    // Отрисовка header'а
    render() {
       return(
        <header className="header">
            <img src="/images/logo.png" className="header__logo" alt="logo" />
            { this.props.isLoggedIn ? <HeaderButton callback={this._quite.bind(this)} name='Выйти' />
                : <HeaderButton callback={this._openPopup.bind(this)} name='Авторизироваться'/> }
        </header> 
       )
    }
}

export default connect(
    state => ({
        isLoggedIn: state.isLoggedIn
    }),
    dispatch => ({
        onOpenClick: () => {
            dispatch({ type: 'OPEN_SIGNIN_POPUP' });
        },
        onQuiteClick: () => {
            dispatch({ type: 'CLEAR_USERLIST' });
            dispatch({ type: 'QUITE' });
        }
    })
)(Header);