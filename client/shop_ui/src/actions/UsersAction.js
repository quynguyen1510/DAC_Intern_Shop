import axios from 'axios';
import { GET_USER } from './actionTypes';

function getUser(user){
    return {
        type: GET_USER,
        user
    }
}

export function getUserByID(userID){
    return function(dispatch){
        axios({
            url: `http://localhost:3000/users/${userID}`,
            method: "GET",
            }).then(function(success){
                console.log(success.data)
            }).catch(function(error){
                console.log(error)
            })
        }
}