import React from 'react';

export default (props) => {
    return (
        <div> <h2> Receipt List </h2>
            <ul>
                {
                    props.receipts.map(
                        (receipt, index) => { return <li onClick={() => props.showReceiptDetail(receipt)} key={index}> {receipt.transactionTime} </li>; }
                    )
                }
            </ul>
        </div>
    );
}