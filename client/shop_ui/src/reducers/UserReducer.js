import { ADD_USER_FAIL, ADD_USER_SUCCESS, GET_USER, GET_USERS, GET_USERS_SIZE } from '../actions/actionTypes';

const defaultState = {
    users: [],
    message: "",
    currentUser: null,
    size: null
}
export default function userReducer(state=defaultState, action) {
    switch(action.type){
        case ADD_USER_SUCCESS:
            alert("Created successfully");
            window.location.reload();
            return {
                ...state,
                currentUser: action.authenticated_user
            }
        case ADD_USER_FAIL:
            return {
                ...state,
                message: "Created failed"
            }
        case GET_USER:
            return {
                ...state,
                currentUser: action.user
            }
        case GET_USERS_SIZE:
            return {
                ...state,
                size: action.size
            }
        case GET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state;

    }
}