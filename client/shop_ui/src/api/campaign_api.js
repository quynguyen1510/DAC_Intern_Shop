import axios from 'axios';
import {HEROKU_API_URL} from '../util/constant'


export async function create(campaign){
    const url = `${HEROKU_API_URL}/campaigns`;
    return await axios.post(url, campaign, {headers: configHeader()});
}

export async function getCampaigns(page){
    const url = `${HEROKU_API_URL}/campaigns?page=${page}`;
    const cfHeader = configHeader();
    try{
       return axios.get(url, {headers: cfHeader})
    }
    catch(err){
        console.log(err)
    }
}

export async function getCampaignsByShop(page, shop_id){
    const url = `${HEROKU_API_URL}/shop/campaigns/${shop_id}?page=${page}`;
    const cfHeader = configHeader();
    try{
       return axios.get(url, {headers: cfHeader})
    }
    catch(err){
        console.log(err)
    }
}


export async function update(campaign, id){
    const url = `${HEROKU_API_URL}/campaigns/${id}`;
    return await axios.put(url, campaign, {headers: configHeader()});
}

export async function deleteCampaign(id){
    const url = `${HEROKU_API_URL}/campaigns/${id}`;
    return await axios.delete(url, {headers: configHeader()})
}

function configHeader(){
    const token = localStorage.getItem("token");
    return {
        "Authorization": token,
        'content-type': 'application/json'
    }
}