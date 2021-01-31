import { correctData } from './correctData';

const dataTrackeresponsiveLine = (period) => {
  const dataCharges = JSON.parse(localStorage.getItem('charges')) || [];
  const dataIncomes = JSON.parse(localStorage.getItem('incomes')) || [];

  const currentChargesData = correctData(dataCharges, period);
  const currentIncomesData = correctData(dataIncomes, period);

  const dataAdaptation = (data) => {
    return data.map((transaction) => {
      const correctDate = new Date(transaction.date);

      let options = { weekday: 'long' };
      const correctWeekday = new Intl.DateTimeFormat('en-US', options).format(
        correctDate
      );

      const correctDay = (date) =>
        date.getDate() <= 9 ? `0${date.getDate()}` : `${date.getDate()}`;

      return {
        x: period === 'week' ? correctWeekday : correctDay(correctDate),
        y: transaction.money,
      };
    });
  };

  return [
    {
      id: 'charges',
      color: 'hsl(203, 70%, 50%)',
      data: dataAdaptation(currentChargesData),
    },
    {
      id: 'incomes',
      color: 'hsl(203, 70%, 50%)',
      data: dataAdaptation(currentIncomesData),
    },
  ];
};

export default dataTrackeresponsiveLine;
