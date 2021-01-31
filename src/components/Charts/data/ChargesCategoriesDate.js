import { correctData } from './correctData';

const dataChargesCategories = (period) => {
  const dataCharges = JSON.parse(localStorage.getItem('charges')) || [];

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

  return dataAdaptation(correctData(dataCharges, period));
};

export default dataChargesCategories;
