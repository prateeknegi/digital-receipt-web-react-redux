import React, {PropTypes} from 'react';


const StoreColumn = (props) => {
    if(props.receipt.storeAddress1){
        return (<td className="bold">In-Store, {props.receipt.storeAddress1}, {props.receipt.storeAddress2}</td>);
    } else {
        return (<td className="bold"> - </td>);
    }
};

const TotalColumn = (props) =>
    <td className="align-right">{props.receipt.total}</td>;


const TransactionDateColumn = (props) =>
    <td className="selector bold"
            onClick={() => props.showReceiptDetail(props.receipt)}>
        {props.receipt.transactionTime}
    </td>;

const ReceiptRow = (props) =>
    <tr>
        <TransactionDateColumn {...props} />
        <StoreColumn {...props} />
        <TotalColumn {...props} />
    </tr>;

const ReceiptList = (props) =>
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
    </div>;

ReceiptList.propTypes = {
  receipts : PropTypes.array,
  showReceiptDetail : PropTypes.func
};

export default ReceiptList;