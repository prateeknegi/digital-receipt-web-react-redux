export const ACTION = 'RETRIEVED_RECEIPT_DETAIL';

export default (receiptKey) => {
    return {
        type: ACTION,
        receiptKey
    }
}