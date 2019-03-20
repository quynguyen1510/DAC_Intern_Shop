import axios from 'axios';
import {HEROKU_API_URL} from '../util/constant'

export async function getBanners(){
    const url = `${HEROKU_API_URL}/banners`;
    return await axios.get(url);
}