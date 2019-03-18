import { LOG_IN_SUCCESS, LOG_IN_FAIL } from '../actions/actionTypes';

// initial state 
const session = !!localStorage.token;

export default function sessionReducer(initialState = session, action) {
    switch(action.type){
        case LOG_IN_SUCCESS:
            // token now is storage, then return true
            window.location.reload();
            return !!localStorage.token;
        case LOG_IN_FAIL: {
            alert("Your account is blocked")
            window.location.reload();
            return false;
        }
        default:
            return initialState;
    }
}