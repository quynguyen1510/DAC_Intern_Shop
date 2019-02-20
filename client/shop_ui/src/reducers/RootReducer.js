import session from './SessionReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    session,
})

export default rootReducer;