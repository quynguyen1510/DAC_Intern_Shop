import { LOG_IN_SUCCESS, LOG_IN_FAIL } from '../actions/actionTypes';

// initial state 
const session = !!sessionStorage.token;

export default function sessionReducer(initialState = session, action) {
    switch(action.type){
        case LOG_IN_SUCCESS:
            // token now is storage, then return true
            window.location.reload();
            return !!sessionStorage.token;
        case LOG_IN_FAIL: {
            window.location.reload();
            return false;
        }
        default:
            return initialState;
    }
}