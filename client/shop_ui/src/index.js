import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store, persistor} from './store/ConfigStore';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';

import ProtectedRoutesContainer from './routes/ProtectedRoute';


ReactDOM.render(<Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <BrowserRouter >
                            <ProtectedRoutesContainer/>
                        </BrowserRouter>
                    </PersistGate>
                </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
