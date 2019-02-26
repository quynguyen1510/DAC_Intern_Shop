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

