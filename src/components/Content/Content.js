import React from 'react';
import { connect } from 'react-redux';

class Content extends React.Component {
    constructor(props){
        super(props);
        this._renderUsers = this._renderUsers.bind(this);
        this._showError = this._showError.bind(this);
        this._getUsers = props.getUsers;
        this.state = {
            usersAreShown: false
        }
    }

    _renderUsers() {
        document.querySelector('.users__list').innerHTML = '';
        this._getUsers()
            .then((data) => {
                data.sort((a, b) => a.id > b.id ? 1 : -1);
                return data;
            })
            .then((data) => {
                this.setState({ usersAreShown: true });
                data.forEach((user) => {
                    this.props.onShowCkick(user);
                })
            })
    }

    _showError() {
        alert('Необходимо авторизироваться!');
    }

    _findUser() {
        this.props.onFindUser(this._userInput.value);
    }

    render() {
        return (
            <div className="users">
                <button type="button" className="users__button" onClick={ this.props.isLoggedIn ? this._renderUsers : this._showError }>Список пользователей</button>
                { this.state.usersAreShown ? 
                    <div>
                        <input className="users__search" placeholder="Поиск пользователя" ref={(input) => { this._userInput = input }}></input>
                        <button className="users__search-button" onClick={this._findUser.bind(this)}>Искать</button>
                    </div>
                    : null }
                <ul className="users__list">
                    {this.props.users.map((user) => 
                        <li key={user.id} className="users__item">id {user.id} {user.name} {user.username}</li>
                    )}
                </ul>
            </div>
        )
    }
} 

export default connect(
    state => ({
        isLoggedIn: state.isLoggedIn,
        users: state.users.filter(user => user.username.includes(state.filterUsers))
    }),
    dispatch => ({
        onShowCkick: (props) => {
            const payload = {
                id: props.id,
                name: `${props.first_name} ${props.last_name}`,
                username: props.username
            }
            dispatch({ type: 'ADD_USER', payload })
        },
        onFindUser: (name) => {
            dispatch({ type: 'FIND_USER', payload: name })
        }
    })
)(Content);