import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    openPopup() {
        console.log('popup opening')
        this.props.onOpenClick();
    }
    
    render() {
        console.log(this.props.state);
       return(
        <header className="header">
            <p className="header__logo">EmphaSoft</p>
            <button onClick={this.openPopup.bind(this)} className="header__auth">Авторизоваться</button>
        </header> 
       )
    }
}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        onOpenClick: () => {
            dispatch({ type: 'OPEN_POPUP' })
        }
    })
)(Header);