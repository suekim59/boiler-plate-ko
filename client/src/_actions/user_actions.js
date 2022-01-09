import axios from "axios";
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

        return {
            //reducer로 넘겨주는 것
            type : LOGIN_USER,
            payload : request
        }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

        return {
            //reducer로 넘겨주는 것
            type : REGISTER_USER,
            payload : request
        }
}

export function auth() {

    const request = axios.get('/api/users/auth')
        .then(response => response.data)

        return {
            type : AUTH_USER,
            payload : request
        }
}