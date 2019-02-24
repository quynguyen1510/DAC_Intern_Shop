import session from './SessionReducer';
import user from './UserReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    session,
    user
})

export default rootReducer;