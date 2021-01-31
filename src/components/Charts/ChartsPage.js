import React from 'react';

import Charts from './Charts';
import NavBar from '../../common/navBar/NavBar';
import TransactionHistoryEmpty from './TransactionHistoryEmpty';

import './style/ChartsPage.css';

const ChartsPage = () => {
  const dataCharges = JSON.parse(localStorage.getItem('charges')) || [];
  const dataIncomes = JSON.parse(localStorage.getItem('incomes')) || [];
  const historyEmpty = dataCharges.length < 1 && dataIncomes.length < 1;
  return (
    <div className="charts-page">
      <NavBar />
      {historyEmpty ? <TransactionHistoryEmpty /> : <Charts />}
    </div>
  );
};

export default ChartsPage;
