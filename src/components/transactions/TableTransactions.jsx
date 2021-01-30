import React, { useState } from "react";
import { formatDate } from "react-day-picker/moment";
import { v4 as uuidv4 } from "uuid";

import TransactionRow from "./TransactionRow";
import "./TableTransactions.css";
import _ from "lodash";

const TableTransactions = ({ storedTransactions, onTransactionChange }) => {
  const [transactions, setTransactions] = useState(storedTransactions || []);
  const [newTransaction, setNewTransaction] = useState(null);
  const [editableTransactionId, setEditableTransactionId] = useState();
  const [sort, setSort] = useState("desc");
  const [sortField, setSortField] = useState("id");

  const headers = ["Category", "Description", "Date", "Money", "Action"];

  const handleAddNewTransaction = () => {
    setNewTransaction({
      id: uuidv4(),
      category: "",
      description: "",
      date: formatDate(new Date()),
      money: "",
    });
  };

  const handleSaveNewTransaction = () => {
    onTransactionChange([...transactions, newTransaction]);
    setTransactions([...transactions, newTransaction]);
    setNewTransaction(null);
    setEditableTransactionId(null);
  };

  const handleSaveEditableTransaction = () => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === newTransaction.id) {
        return newTransaction;
      }
      return transaction;
    });
    onTransactionChange(updatedTransactions);

    setTransactions(updatedTransactions);
    setNewTransaction(null);
    setEditableTransactionId(null);
  };

  const handleCancelNewTransaction = () => {
    setNewTransaction(null);
    setEditableTransactionId(null);
  };

  const handleEditTransaction = (transaction) => {
    setEditableTransactionId(transaction.id);
    setNewTransaction(transaction);
  };

  const handleDeleteTransaction = (id) => {
    const arrayTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    onTransactionChange(arrayTransactions);
    setTransactions([...arrayTransactions]);
  };

  const buildTransactionRow = (transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.category}</td>
      <td>{transaction.description}</td>
      <td>{transaction.date}</td>
      <td>{transaction.money}</td>
      <td>
        <div className="action-table-buttons">
          <button
            className="action-table-button"
            onClick={() => handleEditTransaction(transaction)}
          >
            Edit
          </button>
          <button
            className="action-table-button"
            onClick={() => handleDeleteTransaction(transaction.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );

  const onSort = (category) => {
    const cloneData = transactions.map((item) => {
      if (typeof item.date === "string" || typeof moneyFormat === "string") {
        const сorrectDateFormat = Date.parse(item.date);
        const moneyFormat = item.money.replace(/\D/g, "");
        return {
          ...item,
          money: Number(moneyFormat),
          date: сorrectDateFormat,
        };
      }
      return item;
    });

    const sortType = sort === `desc` ? `asc` : `desc`;
    setSort(sortType);
    setSortField(category);
    const orderedData = _.orderBy(cloneData, category.toLowerCase(), sortType);

    const correctData = orderedData.map((item) => {
      const date = new Date(item.date);

      const correctDay = (date) =>
        date.getDate() <= 9 ? `0${date.getDate()}` : `${date.getDate()}`;
      const correctMounth = (date) =>
        date.getMonth() <= 8
          ? `0${date.getMonth() + 1}`
          : `${date.getMonth() + 1}`;

      const correctDateFormat = `${correctMounth(date)}/${correctDay(
        date
      )}/${date.getFullYear()}`;
      return {
        ...item,
        money: item.money,
        date: correctDateFormat,
      };
    });
    setTransactions(correctData);
  };

  return (
    <div className="transaction-table">
      <div className="d-flex justify-content-end pb-3">
        <button
          className="action-table-button big"
          onClick={handleAddNewTransaction}
        >
          Add More
        </button>
      </div>
      <table className="greyGridTable" striped hover responsive="sm" size="lg">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                onClick={onSort.bind(null, `${header}`)}
                className={sortField === header ? "sort" : "notSorting"}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            if (editableTransactionId === transaction.id) {
              return (
                <TransactionRow
                  key={transaction.id}
                  {...newTransaction}
                  onTransactionChange={setNewTransaction}
                  onSaveNewTransaction={handleSaveEditableTransaction}
                  onCancelNewTransaction={handleCancelNewTransaction}
                />
              );
            } else {
              return buildTransactionRow(transaction);
            }
          })}
          {newTransaction && !editableTransactionId && (
            <TransactionRow
              key={newTransaction.id}
              {...newTransaction}
              onTransactionChange={setNewTransaction}
              onSaveNewTransaction={handleSaveNewTransaction}
              onCancelNewTransaction={handleCancelNewTransaction}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
