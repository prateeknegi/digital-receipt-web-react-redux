export const ACTION = 'RECEIPT_DETAIL';

export default (receiptKey) => {
    return {
        type: ACTION,
        receiptKey
    }
}