import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configStore from './store/ConfigStore';
import { Provider } from 'react-redux';
import HomePageContainer from './components/Homepage';
import {Router, Route} from 'react-router-dom';
import history from './history/history';

const store = configStore();

ReactDOM.render(<Provider store={store}>
                    <Router history={history}>
                        <Route path="/" render={() => (
                            <HomePageContainer />
                        )} />
                    </Router>
                </Provider>, 
    document.getElementById('root'));

