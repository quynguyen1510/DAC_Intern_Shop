import { 
    SIGNUP_SUCCESS, 
    SIGNUP_FAIL, 
    GET_USER,
    GET_USERS, GET_USERS_SIZE,
    ADD_NEW_USER,
     } from '../actions/actionTypes';

const defaultState = {
    users: [],
    message: "",
    currentUser: null,
    size: null
}
export default function userReducer(state=defaultState, action) {
    switch(action.type){
        case SIGNUP_SUCCESS:
            alert("Signup successfully");
            window.location.reload();
            return {
                ...state,
                currentUser: action.authenticated_user
            }
        case SIGNUP_FAIL:
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
        case ADD_NEW_USER:
            return {
                ...state,
                message: action.message
            }
        default:
            return state;

    }
}