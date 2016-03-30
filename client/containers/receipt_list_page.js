import React from 'react';
import ReceiptList from '../components/receipt_list';
import {connect} from 'react-redux';
import showReceiptDetailActionCreator from '../actions/show_receipt_details';
import {fetchReceipts} from '../services'

const ReceiptListWrapper = React.createClass({
    componentDidMount() {
        this.props.fetchReceipts();
    },

    render() {
        return (<ReceiptList {...this.props} />);
    }
});

const mapStateToPropsForReceiptList = function(state){
    return { receipts : state.receipts };
};

const mapDispatchToPropsForReceiptList = function(dispatch){
    return {
        showReceiptDetail(receiptKey) {
            console.log(receiptKey);
            dispatch( showReceiptDetailActionCreator(receiptKey) );
        },
        fetchReceipts() {
            console.log('fetching receipt');
            //do we call action here or inside the service
            dispatch(fetchReceipts());
        }
    };
};
export default connect(mapStateToPropsForReceiptList, mapDispatchToPropsForReceiptList)(ReceiptListWrapper);
