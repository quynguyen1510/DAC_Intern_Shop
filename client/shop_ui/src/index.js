import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configStore from './store/ConfigStore';
import { Provider } from 'react-redux';
import HomePageContainer from './components/Homepage';
import {BrowserRouter , Route} from 'react-router-dom';
import Profile from './components/users/Profie';
import ManageUser from './components/users/ManageUser';

const store = configStore();

ReactDOM.render(<Provider store={store}>
                    <BrowserRouter >
                        <div>
                            <Route path="/" exact component={HomePageContainer} />
                            <Route path="/current-user" component={Profile} />
                            <Route path="/users" component={ManageUser}/>
                        </div>
                    </BrowserRouter>
                </Provider>, 
document.getElementById('root'));

