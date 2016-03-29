import React from 'react';
import ReactDOM from 'react-dom';
import ReceiptList from './components/receipt_list';
import {connect, Provider} from 'react-redux';
import store from './store';
import showReceiptDetailActionCreator from './actions/show_receipt_details';
import ReceiptDetail from './components/receipt_detail';

var mapStateToPropsForReceiptList = function(state){
    return { receipts : state.receipts };
};

var mapDispatchToPropsForReceiptList = function(dispatch){
    return { showReceiptDetail(receiptKey) {
        console.log(receiptKey);
        dispatch( showReceiptDetailActionCreator(receiptKey) );
    }};
};
var ReceiptListContainer = connect(mapStateToPropsForReceiptList, mapDispatchToPropsForReceiptList)(ReceiptList);

var mapStateToPropsForReceiptDetail = function(state){
    return { receiptKey : state.currentReceipt };
};

var mapDispatchToPropsForReceiptDetail = function(dispatch){
    return { };
};
var ReceiptDetailContainer = connect(mapStateToPropsForReceiptDetail, mapDispatchToPropsForReceiptDetail)(ReceiptDetail)

ReactDOM.render(
    <Provider store={store()}>
        <div>
            <ReceiptListContainer />
            <ReceiptDetailContainer />
        </div>
    </Provider>,
    document.getElementById('receipt-app')
);