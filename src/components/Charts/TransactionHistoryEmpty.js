import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import transactionsIcon from './style/transactions-icon.png';
import './style/Charts.css';
import { Redirect } from 'react-router-dom';

import './TransactionHistoryEmpty.css';

const HistoryEmpty = () => {
  const [navigate, setNavigate] = useState(false);

  const handleClick = () => setNavigate(true);

  return (
    <div className="chards-wrapper">
      <div className="card">
        <img src={transactionsIcon} />
        <h3>No Transactions</h3>
        <p>You heven't made any transactions yet</p>
        <Button variant="contained" color="primary" onClick={handleClick}>
          {navigate ? <Redirect to="/tables" /> : null}
          Recharge Now
        </Button>
      </div>
    </div>
  );
};

export default HistoryEmpty;
