import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configStore from './store/ConfigStore';
import { Provider } from 'react-redux';
import HomePageContainer from './components/Homepage';
import {BrowserRouter , Route} from 'react-router-dom';

const store = configStore();

ReactDOM.render(<Provider store={store}>
                    <BrowserRouter >
                        <Route path="/" exact component={HomePageContainer} />
                    </BrowserRouter>
                </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
