import session from './SessionReducer';
import user from './UserReducer';
import categories from './CategoriesReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    session,
    user,
    categories
})

export default rootReducer;