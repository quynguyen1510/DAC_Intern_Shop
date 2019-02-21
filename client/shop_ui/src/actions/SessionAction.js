import { LOG_IN_SUCCESS , LOG_IN_FAIL } from './actionTypes';
import axios from 'axios';


export function loginSuccess(){
    return{
        type: LOG_IN_SUCCESS
    }
}

export function loginFail(){
    return{
        type: LOG_IN_FAIL
    }
}

export function login(crendentials){
    console.log("LOGIN")
    return function(dispatch){
        // if login successfully then get token and save it to local storage
        // dispatch an action login successfully
        axios({
            url: "http://localhost:3000/auth/login",
            method: 'POST',
            data: crendentials
        }).then(function(success){
            console.log(success.data)
            sessionStorage.setItem("token", success.data.auth_token);
            dispatch(loginSuccess());
        }).catch(function(error){
            dispatch(loginFail());
        })
    }
}

