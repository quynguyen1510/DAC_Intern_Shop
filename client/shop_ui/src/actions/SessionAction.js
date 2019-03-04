import { 
    LOG_IN_SUCCESS , 
    LOG_IN_FAIL, 
    SIGNUP_SUCCESS, 
    SIGNUP_FAIL } from './actionTypes';
import axios from 'axios';
import {HEROKU_API_URL} from '../util/constant';


function loginSuccess(){
    return{
        type: LOG_IN_SUCCESS
    }
}

function loginFail(){
    return{
        type: LOG_IN_FAIL
    }
}

function signupSuccess(authenticated_user){
    return {
        type: SIGNUP_SUCCESS,
        authenticated_user
    }
}

function signupFail(){
    return {
        type: SIGNUP_FAIL,
    }
}

export function login(crendentials){
    return function(dispatch){
        // if login successfully then get token and save it to local storage
        // dispatch an action login successfully
        axios({
            url: `${HEROKU_API_URL}/auth/login`,
            method: 'POST',
            data: crendentials
        }).then(function(success){
            localStorage.setItem("token", success.data.auth_token);
            dispatch(loginSuccess());
        }).catch(function(error){
            dispatch(loginFail());
        })
    }
}

export function signup(crendentials){
    return function(dispatch){
        axios({
            url: `${HEROKU_API_URL}/users`,
            method: 'POST',
            data: crendentials
        }).then(function(success){
            dispatch(signupSuccess(success.data.authenticated_user));
        })
        .catch(function(error){
            dispatch(signupFail());
        })
    }
}

export function logout(token){
    return function(dispatch){
        axios({
            url: `${HEROKU_API_URL}/auth/logout`,
            method: 'PUT',
            headers:{
                'Authorization': token
            }
        }).then(function(success){
            console.log(success.data.message);
        })
        .catch(function(error){
            dispatch(signupFail());
        })
    }
}


