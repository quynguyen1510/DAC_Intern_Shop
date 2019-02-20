import { LOG_IN_SUCCESS } from './actionTypes';
import sessionApi from '../api/SessionApi';

export function loginSuccess(){
    return{
        type: LOG_IN_SUCCESS
    }
}

export function login(crendentials){
    return function(dispatch){
        // if login successfully then get token and save it to local storage
        // dispatch an action login successfully
        return sessionApi.login(crendentials).then(response => {
            sessionStorage.setItem('token', response.auth_token);
            dispatch(loginSuccess());
        }).catch(error => {
            throw(error);
        })
    }
}