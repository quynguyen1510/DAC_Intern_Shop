import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store, persistor} from './store/ConfigStore';
import { Provider } from 'react-redux';
import HomePageContainer from './components/Homepage';
import {BrowserRouter , Route} from 'react-router-dom';
import Profile from './components/users/Profie';
import ManageUser from './components/users/ManageUser';
import {PersistGate} from 'redux-persist/integration/react';
import CreateUser from './components/users/CreateUser';

ReactDOM.render(<Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <BrowserRouter >
                            <div>
                                <Route path="/" exact component={HomePageContainer} />
                                <Route path="/profile/users/:id" component={Profile} />
                                <Route path="/manage/users/:page_number" component={ManageUser}/>
                                <Route path="/users/new" component={CreateUser}/>
                            </div>
                        </BrowserRouter>
                    </PersistGate>
                </Provider>, 
document.getElementById('root'));

