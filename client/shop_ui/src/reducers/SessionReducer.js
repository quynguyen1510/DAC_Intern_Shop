import { LOG_IN_SUCCESS } from '../actions/actionTypes';
import history from '../history/history';

// initial state 
const session = !!sessionStorage.token;

export default function sessionReducer(initialState = session, action) {
    switch(action.type){
        case LOG_IN_SUCCESS:
            history.push('/');
            // token now is storage, then return true
            return !!sessionStorage.token;
        default:
            return initialState;
    }
}