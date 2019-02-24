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