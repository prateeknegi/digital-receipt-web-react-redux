import { combineReducers } from 'redux';
import receipts from './receipts';
import currentReceipt from './receipt';

export default combineReducers({
    receipts,
    currentReceipt
})