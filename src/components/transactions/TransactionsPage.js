import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import NavBar from '../../common/navBar';
import {
  getBalance,
  getIncomes,
  getCharges,
  getChargesCategories,
  getIncomesCategories,
} from '../../common/utils/LocalStorageUtil';
import TableTransactions from './TableTransactions';

import './TransactionsPage.css';

const TransactionsPage = () => {
  const storedIncomes = getIncomes();
  const storedCharges = getCharges();

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const balance = getBalance(storedIncomes, storedCharges);
    setBalance(balance);
  }, []);

  const handleTransactionChange = (storageKey, transactions) => {
    localStorage.setItem(storageKey, JSON.stringify(transactions));
    const incomes = storageKey === 'incomes' ? transactions : storedIncomes;
    const charges = storageKey === 'charges' ? transactions : storedCharges;
    const balance = getBalance(incomes, charges);
    setBalance(balance);
  };

  return (
    <div className="transaction-page">
      <NavBar currentBalance={balance} />
      <div className="tables-wrapper">
        <Tabs defaultActiveKey="charges" className="mb-5">
          <Tab eventKey="charges" title="Charges">
            <TableTransactions
              balance={balance}
              transactionsOptions={getChargesCategories()}
              storedTransactionKey="charges"
              storedTransactions={storedCharges}
              onTransactionChange={(transactions) =>
                handleTransactionChange('charges', transactions)
              }
            />
          </Tab>
          <Tab eventKey="incomes" title="Incomes">
            <TableTransactions
              transactionsOptions={getIncomesCategories()}
              storedTransactionKey="incomes"
              storedTransactions={storedIncomes}
              onTransactionChange={(transactions) =>
                handleTransactionChange('incomes', transactions)
              }
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default TransactionsPage;
