import { correctData } from './correctData';

const dataChargesCategories = (period) => {
  const dataCharges = JSON.parse(localStorage.getItem('charges')) || [];

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
        id: transaction.category,
        label: transaction.category,
        value: transaction.money,
        color: 'hsl(356, 70%, 50%)',
      };
    });
  };

  return dataAdaptation(
    addTransactionByCategory(correctData(dataCharges, period))
  );
};

export default dataChargesCategories;
