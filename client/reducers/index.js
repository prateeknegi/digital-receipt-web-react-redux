import { combineReducers } from 'redux';
import receipts from './receipts';
import currentReceipt from './receipt';
import { routerReducer }   from 'react-router-redux';

export default combineReducers({
    receipts,
    currentReceipt,
    routing: routerReducer
})