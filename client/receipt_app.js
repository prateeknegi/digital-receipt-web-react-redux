import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, DefaultRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './store';
import ReceiptListContainer from './containers/receipt_list_page';
import ReceiptDetailContainer from './containers/receipt_detail_page';

const store = configureStore();
const hist = syncHistoryWithStore(browserHistory, store);

var ReceiptApp = (props) => {
  return <div>{props.children}</div>
};

//<Route name="list" path='list' component={ReceiptListContainer} />
ReactDOM.render(
    <Provider store={store}>
        <Router history={hist} >
            <Route name="top" path='/' component={ReceiptApp} >
                <Route name="list" path='list' component={ReceiptListContainer} />
                <Route name="detail" path='detail' component={ReceiptDetailContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('receipt-app')
);