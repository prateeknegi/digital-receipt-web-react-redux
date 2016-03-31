import React from 'react';

export default (props) => {
    const receiptKey = props.receiptKey;
    return (
        <div> <h2> Receipt Detail </h2>
            <div>{receiptKey.divisionNumber}</div>
            <div>{receiptKey.storeNumber}</div>
            <div>{receiptKey.transactionDate}</div>
            <div>{receiptKey.terminalNumber}</div>
            <div>{receiptKey.transactionId}</div>
        </div>
    );
};
