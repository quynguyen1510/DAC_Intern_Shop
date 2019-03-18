import axios from 'axios';
import {HEROKU_API_URL} from '../util/constant'


export async function create(campaign){
    const url = `${HEROKU_API_URL}/campaigns`;
    return await axios.post(url, campaign, {headers: configHeader()});
}

export async function getCampaigns(){
    const url = `${HEROKU_API_URL}/campaigns`;
    const cfHeader = configHeader();
    try{
       return axios.get(url, {headers: cfHeader})
    }
    catch(err){
        console.log(err)
    }
}

function configHeader(){
    const token = localStorage.getItem("token");
    return {
        "Authorization": token,
        'content-type': 'application/json'
    }
}