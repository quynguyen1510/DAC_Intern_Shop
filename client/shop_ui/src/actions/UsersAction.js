import axios from 'axios';
import { GET_USER } from './actionTypes';

function getUser(user){
    return {
        type: GET_USER,
        user
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
                console.log(success.data)
            }).catch(function(error){
                console.log(error)
            })
        }
}

