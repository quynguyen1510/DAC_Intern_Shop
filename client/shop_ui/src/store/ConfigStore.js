import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/RootReducer';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant  from 'redux-immutable-state-invariant';

export default function configStore(){
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}