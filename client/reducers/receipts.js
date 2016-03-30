import {ACTION as RETRIEVED_RECEIPT_LIST} from '../actions/retrieved_receipt_list';
const initialReceiptList = [];

export default (state = initialReceiptList, action) => {
    switch (action.type){
        case RETRIEVED_RECEIPT_LIST:
            return action.receipts;
        default:
            return state;
    }
}