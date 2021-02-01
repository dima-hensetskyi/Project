import React, { useState, useEffect } from 'react';

import Charts from './Charts';
import NavBar from '../../common/navBar';
import TransactionHistoryEmpty from './TransactionHistoryEmpty';

import { getStoredBalance } from '../../common/utils/LocalStorageUtil';

import './style/ChartsPage.css';

const ChartsPage = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const balance = getStoredBalance();
    setBalance(balance);
  }, []);

  const dataCharges = JSON.parse(localStorage.getItem('charges')) || [];
  const dataIncomes = JSON.parse(localStorage.getItem('incomes')) || [];

  const historyEmpty = dataCharges.length < 1 && dataIncomes.length < 1;
  return (
    <div className="charts-page">
      <NavBar currentBalance={balance} />
      {historyEmpty ? <TransactionHistoryEmpty /> : <Charts />}
    </div>
  );
};

export default ChartsPage;
