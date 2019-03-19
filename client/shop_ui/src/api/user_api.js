import axios from 'axios';
import {HEROKU_API_URL} from '../util/constant';


export async function create(user){
    const url = `${HEROKU_API_URL}/users`;
    return await axios.post(url, user, {headers: configHeader()})
}

export async function update(user, id){
    const url = `${HEROKU_API_URL}/users/${id}`;
    return await axios.put(url, user, {headers: configHeader()});
}
export async function getUsers(page){
    const url = `${HEROKU_API_URL}/users?page=${page}`;
    return await axios.get(url, {headers: configHeader()})
}

export async function deleteUser(id){
    const url = `${HEROKU_API_URL}/users/${id}`;
    return await axios.delete(url, {headers: configHeader()})
}

export async function getUserById(id){
    const url = `${HEROKU_API_URL}/users/${id}`;
    return await axios.get(url, {headers: configHeader()})
}

function configHeader(){
    const token = localStorage.getItem("token");
    return {
        "Authorization": token,
        'content-type': 'application/json'
    }
}