export const ACTION = 'RETRIEVED_RECEIPT_LIST';

export default (receipts) => {
    return {
        type: ACTION,
        receipts //this is array of receipt summary
    }
}

