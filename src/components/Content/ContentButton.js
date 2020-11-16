import React from 'react';
import { connect } from 'react-redux';

class ContentButton extends React.Component {
    constructor(props) {
        super(props);
        this._getUsersCallback = props.getUsers;
    }

    // Получение пользователей с сервера
    _getUsers() {
        document.querySelector('.users__list').innerHTML = '';
        this._getUsersCallback()
            // Сортировка пользователей по id
            .then((data) => {
                data.sort((a, b) => a.id > b.id ? 1 : -1);
                return data;
            })
            // Добавление объекта пользователя в массив usersList в store
            .then((data) => {
                data.forEach((user) => {
                    this.props.onShowClick(user);
                })
            })
    }

    // Ошибка при неавторизированной попытке получить список пользователей
    _showError() {
        this.props.onErrorClick();
    }

    // Действия кнопки в зависимости от авторизированности пользователя 
    render() {
        return (
            <button 
                type="button" 
                className="users__button" 
                onClick={ this.props.isLoggedIn ? 
                    this._getUsers.bind(this) : 
                    this._showError.bind(this)}
            >
                Список пользователей
            </button>
        )
    }
}

export default connect(
    state => ({
        isLoggedIn: state.isLoggedIn
    }),
    dispatch => ({
        onShowClick: (props) => {
            const payload = {
                id: props.id,
                name: `${props.first_name} ${props.last_name}`,
                username: props.username
            }
            dispatch({ type: 'ADD_USER', payload })
        },
        onErrorClick: () => {
            dispatch({ type: 'OPEN_ERROR_POPUP' })
        }
    })
)(ContentButton);