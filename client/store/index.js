import {createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router';

const routerMiddlewareWithBrowserHistory = routerMiddleware(browserHistory)
export default (initialState) => {
    return createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware),
            applyMiddleware(routerMiddlewareWithBrowserHistory)
        )
     );
}