import { ADD_USER_FAIL, ADD_USER_SUCCESS } from '../actions/actionTypes';

const defaultState = {
    users: [],
    message: ""
}
export default function userReducer(state=defaultState, action) {
    switch(action.type){
        case ADD_USER_SUCCESS:
            return {
                users: [...state.users, action.user],
                message: "Created successfully"
            }
        case ADD_USER_FAIL:
            return {
                ...state,
                message: "Created failed"
            }
        default:
            return state;

    }
}