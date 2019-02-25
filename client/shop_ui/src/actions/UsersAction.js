import axios from 'axios';
import { GET_USER, GET_USERS } from './actionTypes';

function getUser(user){
    return {
        type: GET_USER,
        user
    }
}

function getUsers(users){
    return {
        type: GET_USERS,
        users
    }
}

export function getAuthenticatedUser(token){
    return function(dispatch){
        axios({
            url: `http://localhost:3000/authenticate/profile`,
            method: "GET",
            data: {},
            headers:{
                'Authorization': token
            }
            }).then(function(success){
                dispatch(getUser(success.data.current_user));
            }).catch(function(error){
                console.log(error)
            })
        }
}

export function getUserById(token, user_id){
    return function(dispatch){
        axios({
            url: `http://localhost:3000/users/${user_id}`,
            method: "GET",
            data: {
                id: user_id
            },
            headers:{
                'Authorization': token
            }
            }).then(function(success){
                dispatch(getUser(success.data))
            }).catch(function(error){
                console.log(error)
            })
        }
}

export function getListUsers(token, page, per_page){
    return function(dispatch){
        axios({
            url: `http://localhost:3000/users`,
            method: "GET",
            data: {
                page: page,
                per_page: per_page
            },
            headers:{
                'Authorization': token
            }
            }).then(function(success){
               dispatch(getUsers(success.data))
            }).catch(function(error){
                console.log(error)
            })
    }
}