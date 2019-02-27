import { LOG_IN_SUCCESS , LOG_IN_FAIL, ADD_USER_FAIL, ADD_USER_SUCCESS } from './actionTypes';
import axios from 'axios';


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

function addUserSuccess(authenticated_user){
    return {
        type: ADD_USER_SUCCESS,
        authenticated_user
    }
}

function addUserFail(){
    return {
        type: ADD_USER_FAIL,
    }
}

export function login(crendentials){
    return function(dispatch){
        // if login successfully then get token and save it to local storage
        // dispatch an action login successfully
        axios({
            url: "http://localhost:3000/auth/login",
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
            url: "http://localhost:3000/users",
            method: 'POST',
            data: crendentials
        }).then(function(success){
            dispatch(addUserSuccess(success.data.authenticated_user));
        })
        .catch(function(error){
            console.log(error)
            dispatch(addUserFail());
        })
    }
}
