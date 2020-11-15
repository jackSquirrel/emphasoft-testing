export default class Api {
    constructor(props) {
        this._link = props.baseUrl
    }

    signIn(username, password) {
        return fetch(`${this._link}/api-token-auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((res) => {
            if(res.ok) {
                console.log('успех!');
                return res.json();
            }
            return Promise.reject(res);
        })
        .catch((err) => {
            console.log('Ошибка: ' + err.status);
            return err.json();
        })
    }

    getUsers() {
        console.log(localStorage.getItem('token'));
        return fetch(`${this._link}/api/v1/users/`, {
            method: 'GET',
            headers: {
                authorization: `Token ${localStorage.getItem('token')}`
            }
        })
        .then((res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(res);
        }))
        .catch((err) => {
            console.log('Ошибка' + err.status);
            return err.json();
        })
    }
}