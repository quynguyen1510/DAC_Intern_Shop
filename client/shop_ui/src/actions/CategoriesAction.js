import axios from 'axios';
import { GET_CATEGORIES} from './actionTypes';

function getCategories(cetegories){
    return {
        type: GET_CATEGORIES,
        cetegories
    }
}


export function getCategories(){
    return function(dispatch){
        axios({
            url: `http://localhost:3000/categories/`,
            method: "GET",
            data: {
            },
            }).then(function(success){
                dispatch(getCategories(success.data))
            }).catch(function(error){
                console.log(error)
            })
        }
}
