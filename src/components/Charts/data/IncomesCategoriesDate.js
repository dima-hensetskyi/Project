import { correctData } from './correctData';

const dataIncomesCategories = (period) => {
  const dataIncomes = JSON.parse(localStorage.getItem('incomes')) || [];

  const dataAdaptation = (data) => {
    return data.map((transaction) => {
      return {
        label: transaction.category,
        Income: transaction.money,
        [`${transaction.category}Color`]: 'hsl(342, 70%, 50%)',
      };
    });
  };
  return dataAdaptation(correctData(dataIncomes, period));
};

export default dataIncomesCategories;
