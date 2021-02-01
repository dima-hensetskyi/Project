import { correctData } from './correctData';

const dataIncomesCategories = (period) => {
  const dataIncomes = JSON.parse(localStorage.getItem('incomes')) || [];

  const addTransactionByCategory = (data) => {
    return data.reduce((data, transaction) => {
      const found = data.find((item) => item.category === transaction.category);
      if (found) {
        found.money += transaction.money;
      } else {
        data.push(transaction);
      }
      return data;
    }, []);
  };
  const dataAdaptation = (data) => {
    return data.map((transaction) => {
      return {
        label: transaction.category,
        Income: transaction.money,
        [`${transaction.category}Color`]: 'hsl(342, 70%, 50%)',
      };
    });
  };
  return dataAdaptation(
    addTransactionByCategory(correctData(dataIncomes, period))
  );
};

export default dataIncomesCategories;
