import React from 'react';

var StoreColumn = (props) => {
    if(props.receipt.storeAddress1){
        return (<td className="bold">In-Store, {props.receipt.storeAddress1}, {props.receipt.storeAddress2}</td>);
    } else {
        return (<td className="bold"> - </td>);
    }
};

var TotalColumn = (props) => {
    return (<td className="align-right">{props.receipt.total}</td>);
};

var TransactionDateColumn = (props) => {
    return (
        <td className="selector bold"
                onClick={() => props.showReceiptDetail(props.receipt)}>
            {props.receipt.transactionTime}
        </td>);
};

var ReceiptRow = (props) => { return (
    <tr>
        <TransactionDateColumn {...props} />
        <StoreColumn {...props} />
        <TotalColumn {...props} />
    </tr>);
};

export default (props) => {
    return (
        <div className="table-container">
            <table>
            <thead>
                <tr>
                    <th>Date of Receipt</th>
                    <th>Fulfillment</th>
                    <th className="align-right">Amount</th>
                </tr>
            </thead>
            <tbody>
                { props.receipts.map((receipt, index) => {
                    return <ReceiptRow showReceiptDetail={props.showReceiptDetail}
                                       receipt={receipt}
                                       key={index} />;
                })}
            </tbody>
            </table>
        </div>
    );
}