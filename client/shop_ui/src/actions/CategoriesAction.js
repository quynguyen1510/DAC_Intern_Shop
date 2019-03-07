import axios from 'axios';
import { GET_CATEGORIES} from './actionTypes';
import { HEROKU_API_URL} from '../util/constant'
function getCategories(categories){
    return {
        type: GET_CATEGORIES,
        categories
    }
}


export function getListCategories(){
    return function(dispatch){
        axios({
            url: `${HEROKU_API_URL}/categories/`,
            method: "GET"
            }).then(function(success){
                dispatch(getCategories(success.data))
            }).catch(function(error){
                console.log(error)
            })
        }
}
