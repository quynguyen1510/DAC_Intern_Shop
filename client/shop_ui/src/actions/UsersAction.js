import axios from 'axios';
import { GET_USER } from './actionTypes';

function getUser(user){
    return {
        type: GET_USER,
        user
    }
}

<<<<<<< HEAD
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
=======
export function getUserByID(userID){
    return function(dispatch){
        axios({
            url: `http://localhost:3000/users/${userID}`,
            method: "GET",
            }).then(function(success){
                console.log(success.data)
>>>>>>> af5fecba8cadca364c879dd5e0b7357e5f013e41
            }).catch(function(error){
                console.log(error)
            })
        }
}