import axios from 'axios';
import { GET_USER, GET_USERS, GET_USERS_SIZE, ADD_NEW_USER, UPDATE_USER} from './actionTypes';
import {HEROKU_API_URL} from '../util/constant';

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

function getSize(size){
    return {
        type: GET_USERS_SIZE,
        size
    }
}

function addUser(message){
    return {
        type: ADD_NEW_USER,
        message
    }
}

function updateUser(message){
    return {
        type: UPDATE_USER,
        message
    }
}


export function getAuthenticatedUser(token){
    return function(dispatch){
        axios({
            url: `${HEROKU_API_URL}/authenticate/profile`,
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
            url: `${HEROKU_API_URL}/users/${user_id}`,
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

export function getUsersSize(token){
    return function(dispatch){
        axios({
            url: `${HEROKU_API_URL}/collection/users/size`,
            method: "GET",
            data: {
            },
            headers:{
                'Authorization': token
            }
            }).then(function(success){
               dispatch(getSize(success.data.size))
            }).catch(function(error){
                console.log(error)
            })
    }
}

export function getListUsers(token, page){
    return function(dispatch){
        axios({
            url: `${HEROKU_API_URL}/users/?page=${page}`,
            method: "GET",
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


export function addNewUser(crendentials){
    return function(dispatch){
        axios({
            url: `${HEROKU_API_URL}/users`,
            method: 'POST',
            data: crendentials
        }).then(function(success){
            //console.log(success.data)
            dispatch(addUser(success.data.message));
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

export function updateExistingUser(crendentials, token, user_id){
    return function(dispatch){
        axios({
            url: `${HEROKU_API_URL}/users/${user_id}`,
            method: 'PUT',
            data: crendentials,
            headers: {
                'Authorization': token
            }
        }).then(function(success){
           dispatch(updateUser(success.data.message));
           dispatch(getListUsers(token, 1));
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

export function deleteExistingUser(token, user_id){
    return function(dispatch){
        axios({
            url: `${HEROKU_API_URL}/users/${user_id}`,
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        }).then(function(success){
            console.log(success.data.message)
            // update new list
            dispatch(getListUsers(token, 1));
        })
        .catch(function(error){
            console.log(error)
        })
    }
}