import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux'

import {fetchReceipts} from '../services'
import ReceiptList from '../components/receipt_list';
import {encode} from '../util/receipt_id_encoder';

const ReceiptListWrapper = React.createClass({
    componentDidMount() {
        this.props.fetchReceipts();
    },

    render() {
        return (<ReceiptList
                    receipts={this.props.receipts}
                    showReceiptDetail={this.props.showReceiptDetail}
                />);
    }
});

const mapStateToPropsForReceiptList = function(state){
    return { receipts : state.receipts };
};

const mapDispatchToPropsForReceiptList = function(dispatch){
    return {
        showReceiptDetail(receiptKey) {
            console.log(receiptKey);
            dispatch(push('/detail/'+ encode(receiptKey)));
        },
        fetchReceipts() {
            console.log('fetching receipts list');
            //do we call action here or inside the service
            dispatch(fetchReceipts());
        }
    };
};
export default connect(mapStateToPropsForReceiptList, mapDispatchToPropsForReceiptList)(ReceiptListWrapper);
