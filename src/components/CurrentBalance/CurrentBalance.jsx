import React, { useContext } from 'react';
import { GlobalContext} from '../../context/GlobalStage';
import './CurrentBalance.css';

function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
  }

  export const CurrentBalance = () => {
    const { transactions } = useContext(GlobalContext);
  
    const amounts = transactions.map(transaction => transaction.amount);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return (
        <div className="balance-block">
            <div className="balance-text-sum">{moneyFormatter(total)}</div>
            <div className="balance-text">Current Balance</div>
        </div>
    );
}

export default CurrentBalance;
