import axios from 'axios';

const loginInstance = axios.create({
    baseURL: 'https://api.etherealmachines.com'
});

const loginUser = (callback, data) => {
    loginInstance.post(`/auth/token/login/`, data, {
        headers: {
            'Content-Type': 'application/json'
        },
        crossdomain: true
    })
        .then((res) => { callback(res) })
        .catch(err => callback(err))
}

export default loginUser
