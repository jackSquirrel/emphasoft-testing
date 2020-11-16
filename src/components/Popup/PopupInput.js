import React from 'react';
import { connect } from 'react-redux';

class PopupInput extends React.Component {
    constructor(props){
        super(props);
        this._name = props.name;
        this._placeholder = props.placeholder;
        this._validation = this._validation.bind(this);
    }

    // Валидация введенных данных
    _validation() {
        if(this._input.value.length === 0) {
            this._error.textContent = 'Это обязательное поле';
            this._name === 'name' ? this.props.onUsernameUnvalid() : this.props.onPasswordUnvalid();
        } else {
            this._error.textContent = '';
            this._name === 'name' ? this.props.onUsernameValid() : this.props.onPasswordValid();
        }
    }

    // Отрисовка полей ввода
    render() {
        this.props.onUsernameUnvalid();
        this.props.onPasswordUnvalid();
        return (
            <div>
                <input 
                    type={this._name === 'name' ? 'text' : 'password'} 
                    name={this._name} 
                    className="popup__input" 
                    placeholder={this._placeholder} 
                    ref={(input) => {this._input = input}} 
                    onChange={this._validation} 
                />
                <span 
                    id={this._name} 
                    className="popup__error" 
                    ref={(span) => {this._error = span}}>
                </span>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        onUsernameValid: () => {
            dispatch({ type: 'USERNAME_VALID' })
        },
        onUsernameUnvalid: () => {
            dispatch({ type: 'USERNAME_UNVALID' })
        },
        onPasswordValid: () => {
            dispatch({ type: 'PASSWORD_VALID' })
        },
        onPasswordUnvalid: () => {
            dispatch({ type: 'PASSWORD_UNVALID' })
        }
    })
)(PopupInput);