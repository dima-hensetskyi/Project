import React from 'react';

import './CurrentBalance.css';

const CurrentBalance = ({ balance }) => (
  <div className="balance-block">
    <div className="balance-text-sum">{balance}</div>
    <div className="balance-text">Current Balance</div>
  </div>
);

export default CurrentBalance;
