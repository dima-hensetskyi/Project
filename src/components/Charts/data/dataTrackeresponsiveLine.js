import { correctData } from './correctData';

const dataTrackeresponsiveLine = (period) => {
  const dataCharges = JSON.parse(localStorage.getItem('charges')) || [];
  const dataIncomes = JSON.parse(localStorage.getItem('incomes')) || [];

  const currentChargesData = correctData(dataCharges, period);
  const currentIncomesData = correctData(dataIncomes, period);

  const addTransactionByDate = (data) => {
    return data.reduce((data, transaction) => {
      const found = data.find((item) => item.date === transaction.date);
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

  const filterByDate = (dataCharges, dataIncomes) => {
    const firstFilter = dataIncomes.filter(
      (n) => dataCharges.findIndex((i) => i.x == n.x) === -1
    );
    const secondFilter = dataCharges.filter(
      (n) => dataIncomes.findIndex((i) => n.x == i.x) === -1
    );

    if (firstFilter) {
      firstFilter.map((item) => {
        dataCharges.push({ ...item, y: 0 });
      });
    }
    if (secondFilter) {
      secondFilter.map((item) => {
        dataIncomes.push({ ...item, y: 0 });
      });
    }
  };
  const sortByDate = (data) => data.sort((a, b) => (a.x > b.x ? 1 : -1));

  const chargesData = dataAdaptation(addTransactionByDate(currentChargesData));
  const incomesData = dataAdaptation(addTransactionByDate(currentIncomesData));
  filterByDate(chargesData, incomesData);

  return [
    {
      id: 'charges',
      color: 'hsl(203, 70%, 50%)',
      data: sortByDate(chargesData),
    },
    {
      id: 'incomes',
      color: 'hsl(203, 70%, 50%)',
      data: sortByDate(incomesData),
    },
  ];
};

export default dataTrackeresponsiveLine;
