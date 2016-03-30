import {createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

export default (initialState) => {
    return createStore(
        reducer,
        initialState,
        compose(applyMiddleware(thunkMiddleware))
     );
}