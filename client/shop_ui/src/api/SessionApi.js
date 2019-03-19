import axios from 'axios';
import {HEROKU_API_URL} from '../util/constant';

export async function login(credentials){
    const url = `${HEROKU_API_URL}/auth/login`;
    return await axios.post(url, credentials);
}

export async function logout(credentials){
    const url = `${HEROKU_API_URL}/auth/logout`;
    return await axios.put(url, credentials);
}

export async function signup(credentials){
    const url = `${HEROKU_API_URL}/users/`;
    return await axios.post(url, credentials);
}