import React from 'react';

export default (props) =>
    <div> <h2> Receipt Detail </h2>
        <div>{props.receiptKey.divisionNumber} - {props.receiptKey.transactionTime}</div>
    </div>;
