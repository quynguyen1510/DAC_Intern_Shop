import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/Homepage.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));

serviceWorker.unregister();
