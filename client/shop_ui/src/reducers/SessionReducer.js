import { LOG_IN_SUCCESS } from '../actions/actionTypes';
import { Redirect } from 'react-router';
// initial state 
const session = !!sessionStorage.token;

export default function sessionReducer(initialState = session, action) {
    switch(action.type){
        case LOG_IN_SUCCESS:
            // token now is storage, then return true
            return !!sessionStorage.token;
        default:
            return initialState;
    }
}