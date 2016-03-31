import React from 'react';
import {connect} from 'react-redux';

import {decode} from '../util/receipt_id_encoder';
import ReceiptDetail from '../components/receipt_detail';
import {fetchReceipt} from '../services'

const ReceiptDetailsWrapper = React.createClass({
    componentDidMount() {
        const receiptKeyEncoded = this.props.params.receiptKey;
        const receiptKey = decode(receiptKeyEncoded);
        this.props.fetchReceipt(receiptKey);
    },

    render() {
        return (<ReceiptDetail
            receiptKey={this.props.receiptKey}
        />);
    }
});

var mapStateToPropsForReceiptDetail = function(state){
    return { receiptKey : state.currentReceipt };
};

var mapDispatchToPropsForReceiptDetail = function(dispatch){
    return {
        fetchReceipt(receiptKey) {
            console.log("fetching receipt");
            dispatch(fetchReceipt(receiptKey));
        }
    };
};

export default connect(mapStateToPropsForReceiptDetail, mapDispatchToPropsForReceiptDetail)(ReceiptDetailsWrapper);

