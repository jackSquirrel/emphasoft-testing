import React from 'react';
import { connect } from 'react-redux';

class Content extends React.Component {
    constructor(props){
        super(props);
        this._showUsers = this._showUsers.bind(this);
        this._showError = this._showError.bind(this);
    }

    _showUsers() {
        console.log('Users list');
    }

    _showError() {
        console.log('Необходимо авторизироваться!');
    }

    render() {
        return (
            <div className="users">
                <button type="button" className="users__button" onClick={ this.props.isLoggedIn ? this._showUsers : this._showError }>Список пользователей</button>
            </div>
        )
    }
} 

export default connect(
    state => ({
        isLoggedIn: state.isLoggedIn
    }),
    dispatch => ({
        onButtonClick: () => {
            dispatch({ type: '' })
        }
    })
)(Content);