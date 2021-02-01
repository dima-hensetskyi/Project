import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import TableTransactions from './TableTransactions';
import NavBar from '../../common/navBar';
import {
  getBalance,
  getIncomes,
  getCharges,
} from '../../common/utils/LocalStorageUtil';

import './TransactionsPage.css';

function TransactionsPage() {
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
              storedTransactionKey="charges"
              storedTransactions={storedCharges}
              onTransactionChange={(transactions) =>
                handleTransactionChange('charges', transactions)
              }
            />
          </Tab>
          <Tab eventKey="incomes" title="Incomes">
            <TableTransactions
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
}

export default TransactionsPage;
