import React, { useEffect, useState } from "react";
import CurrentBalance from "./CurrentBalance";
import { Tabs, Tab } from "react-bootstrap";

import "./TransactionsPage.css";
import TableTransactions from "./TableTransactions";

function TransactionsPage() {
  const storedIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
  const storedCharges = JSON.parse(localStorage.getItem("charges")) || [];

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getBalance(storedIncomes, storedCharges);
  }, []);

  const handleTransactionChange = (storageKey, transactions) => {
    localStorage.setItem(storageKey, JSON.stringify(transactions));
    const incomes = storageKey === "incomes" ? transactions : storedIncomes;
    const charges = storageKey === "charges" ? transactions : storedCharges;
    getBalance(incomes, charges);
  };

  const getBalance = (incomes, charges) => {
    const incomesSum = incomes.reduce(
      (total, income) => (total += +income.money),
      0
    );
    const chargesSum = charges.reduce(
      (total, charge) => (total += +charge.money),
      0
    );
    setBalance(incomesSum - chargesSum);
  };

  return (
    <div className="page">
      <nav className="navigation-wrapper">
        <CurrentBalance balance={balance} />
      </nav>
      <div className="transaction-page">
        <Tabs defaultActiveKey="charges" className="mb-5">
          <Tab eventKey="charges" title="Charges">
            <TableTransactions
              storedTransactionKey="charges"
              storedTransactions={storedCharges}
              onTransactionChange={(transactions) =>
                handleTransactionChange("charges", transactions)
              }
            />
          </Tab>
          <Tab eventKey="incomes" title="Incomes">
            <TableTransactions
              storedTransactionKey="incomes"
              storedTransactions={storedIncomes}
              onTransactionChange={(transactions) =>
                handleTransactionChange("incomes", transactions)
              }
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default TransactionsPage;
