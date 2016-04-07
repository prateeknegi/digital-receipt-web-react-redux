import React from 'react';
import ReceiptDetail from '../client/components/receipt_detail';

describe("Receipt Detail", function() {
    this.header(`##Receipt Detail Component`); // Markdown.

    var receiptDetailKey =    {
        divisionNumber: '014',
        storeNumber: '234',
        transactionDate: '234',
        terminalNumber: '1',
        transactionId: '666'
    };

    var receiptDetailKey1 =    {
        divisionNumber: '84',
        storeNumber: '234',
        transactionDate: '234',
        terminalNumber: '1',
        transactionId: '667'
    };

    before(() => {
        console.log('before');
        // Runs when the Suite loads.
        // Use this to load your component-under-test.
    });

    section("Receipt Detail displayed", () => {
        console.log('section');
        it("displayed", () => {
            console.log('it');
            this.load(<ReceiptDetail receiptKey={receiptDetailKey}></ReceiptDetail>);
            //this.props({ receiptKey: receiptDetailKey });
        });

        it("displayed another", () => {
            console.log('it');
            this.load(<ReceiptDetail receiptKey={receiptDetailKey1}></ReceiptDetail>);
            //this.props({ receiptKey: receiptDetailKey });
        });
    });
});