export const encode = (receipt): string => {
    return receipt.divisionNumber + "~" +
        receipt.storeNumber + "~" +
        receipt.transactionDate + "~" +
        receipt.terminalNumber + "~" +
        receipt.transactionId;
};

//TODO add some exceptions or handle
export const decode = (receiptId): receiptKey => {
    const receiptValues = receiptId.split("~");
    return {
        "divisionNumber": receiptValues[0],
        "storeNumber": receiptValues[1],
        "transactionDate": receiptValues[2],
        "terminalNumber": receiptValues[3],
        "transactionId": receiptValues[4]
    };
};

