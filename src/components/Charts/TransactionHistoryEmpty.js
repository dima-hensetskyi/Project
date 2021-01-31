import React from 'react';
import { Button } from '@material-ui/core';

import transactionsIcon from './style/transactions-icon.png';
import './style/Charts.css';

const HistoryEmpty = () => (
    <div className="transactionHistoryEmpty">
        <div className="cart">
            <img src={transactionsIcon} />
            <h3>No Transactions</h3>
            <p>You heven't made any transactions yet</p>
            <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
            >
                Recharge Now
            </Button>
        </div>
    </div>
);

export default HistoryEmpty;
