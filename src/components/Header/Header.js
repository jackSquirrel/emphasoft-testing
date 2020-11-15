import React from 'react';
import { connect } from 'react-redux';
import HeaderButton from './HeaderButton';

class Header extends React.Component {
    openPopup() {
        console.log('popup opening')
        this.props.onOpenClick();
    }
    
    render() {
       return(
        <header className="header">
            <img src="/images/logo.png" className="header__logo" alt="logo" />
            { this.props.isLoggedIn ? <HeaderButton callback={this.props.onQuiteClick} name='Выйти' />
                : <HeaderButton callback={this.props.onOpenClick} name='Авторизироваться'/> }
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