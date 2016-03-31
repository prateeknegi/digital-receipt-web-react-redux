import {ACTION as RETRIEVED_RECEIPT} from '../actions/retrieved_receipt_detail';

var initialReceipt = {

};

export default (state = initialReceipt, action) => {
    switch (action.type){
        case RETRIEVED_RECEIPT:
            return action.receiptKey;
        default:
            return state;
    }
}