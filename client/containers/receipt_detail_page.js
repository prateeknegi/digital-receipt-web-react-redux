import React from 'react';
import {connect} from 'react-redux';
import ReceiptDetail from '../components/receipt_detail';

var mapStateToPropsForReceiptDetail = function(state){
    return { receiptKey : state.currentReceipt };
};

var mapDispatchToPropsForReceiptDetail = function(dispatch){
    return { };
};

export default connect(mapStateToPropsForReceiptDetail, mapDispatchToPropsForReceiptDetail)(ReceiptDetail);

