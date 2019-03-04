import { GET_CATEGORIES } from '../actions/actionTypes';

// initial state 
const defaultState = {
    categories: [],
    message: "",
}

export default function categoriesReducer(state=defaultState, action) {
    switch(action.type){
        case GET_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            }
        default:
            return state;
    }
}