export default class Api {
    constructor(props) {
        this._link = props.baseUrl
    }

    signIn(username, password) {
        console.log(this._link);
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
}