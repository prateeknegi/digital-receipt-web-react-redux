const initialReceiptList = [{
    "divisionNumber": "014",
    "itemCount": "3",
    "storeAddress1": "1234 Some Pl.",
    "storeAddress2": "Cincinnati, OH 45211",
    "storeNumber": "00383",
    "subTotal": "$23.47",
    "tax": "$1.61",
    "terminalNumber": "5",
    "total": "$25.08",
    "transactionDate": 1456780899128,
    "transactionId": "123",
    "transactionTime": "01/22/2015T12:54:00"
}, {
    "divisionNumber": "014",
    "itemCount": "1",
    "storeAddress1": "1234 Some Pl.",
    "storeAddress2": "Cincinnati, OH 45211",
    "storeNumber": "00383",
    "subTotal": "$120.47",
    "tax": "$11.61",
    "terminalNumber": "2",
    "total": "$133.08",
    "transactionDate": 1456780899128,
    "transactionId": "121",
    "transactionTime": "01/21/2015T12:54:00"
}];

export default (state = initialReceiptList, action) => {
    switch (action.type){
        default:
            return state;
    }
}