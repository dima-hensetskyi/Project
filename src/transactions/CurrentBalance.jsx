import React from "react";
import "./CurrentBalance.css";

function CurrentBalance({ balance }) {
  return (
    <div className="balance-block">
      <div className="balance-text-sum">{balance}</div>
      <div className="balance-text">Current Balance</div>
    </div>
  );
}

export default CurrentBalance;
