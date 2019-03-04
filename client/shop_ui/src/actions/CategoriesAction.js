import axios from 'axios';
import { GET_CATEGORIES} from './actionTypes';

function getCategories(categories){
    return {
        type: GET_CATEGORIES,
        categories
    }
}


export function getListCategories(){
    return function(dispatch){
        axios({
            url: `http://localhost:3000/categories/`,
            method: "GET"
            }).then(function(success){
                dispatch(getCategories(success.data))
            }).catch(function(error){
                console.log(error)
            })
        }
}
