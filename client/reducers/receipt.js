var initialReceipt = {};

export default (state = initialReceipt, action) => {
    switch (action.type){
        case 'RECEIPT_DETAIL':
            return  action.receiptKey;
        default:
            return state;
    }
}