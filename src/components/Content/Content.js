import React from 'react';
import { connect } from 'react-redux';
import ContentButton from './ContentButton';

class Content extends React.Component {
    constructor(props){
        super(props);
        this.getUsers = props.getUsers;
    }

    // Фильтрация списка пользователей по введеному слову
    _findUser() {
        this.props.onFindUser(this._userInput.value);
    }

    // Отрисовка кнопки и списка пользователей с полем для поиска
    // Список и поле поиска отрисовываются только при нажатии кнопки
    render() {
        return (
            <div className="users">
                <ContentButton getUsers={() => this.getUsers()} />
                { this.props.usersAreShown ? 
                    <div className="users__search-field">
                        <input className="users__search" placeholder="Поиск пользователя" ref={(input) => { this._userInput = input }}></input>
                        <button className="users__search-button" onClick={this._findUser.bind(this)}>Искать</button>
                    </div>
                    : null }
                <ul className="users__list">
                    {this.props.users.map((user) => 
                        <li key={user.id} className="users__item">id: {user.id}<br />Username: {user.username}<br />Name: {user.name}</li>
                    )}
                </ul>
            </div>
        )
    }
} 

export default connect(
    state => ({
        users: state.users.usersList.filter(user => user.username.includes(state.filterUsers)),
        usersAreShown: state.users.usersAreShown
    }),
    dispatch => ({
        onFindUser: (name) => {
            dispatch({ type: 'FIND_USER', payload: name })
        }
    })
)(Content);