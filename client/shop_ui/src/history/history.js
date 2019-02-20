import {createBrowserHistory} from 'history';
import {BrowserRouter} from 'react-router-dom';

export const history = createBrowserHistory();

export default class CustomBrowserRouter extends BrowserRouter {
    history
}