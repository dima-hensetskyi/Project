export const correctData = (data, period) => {
  const cloneData = (data) =>
    data.map((transaction) => {
      const сorrectDateFormat = Date.parse(transaction.date);
      const moneyFormat = Number(transaction.money)
        ? Number(transaction.money)
        : transaction.money.replace(/\D/g, '');
      return {
        ...transaction,
        money: moneyFormat,
        date: сorrectDateFormat,
      };
    });

  const filterByDate = (data) => {
    const date = new Date();
    if (period === 'week') {
      const min = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - 7
      );
      return data.filter((transaction) => transaction.date >= min);
    } else {
      const mounth = date.getMonth();
      return data.filter(
        (transaction) => new Date(transaction.date).getMonth() === mounth
      );
    }
  };

  const sortByDate = (data) => data.sort((a, b) => (a.date > b.date ? 1 : -1));

  const addTransactionByDate = (data) => {
    return data.reduce((data, transaction) => {
      const found = data.find(
        (item) =>
          item.date === transaction.date && item.date === transaction.date
      );
      if (found) {
        found.money += transaction.money;
      } else {
        data.push(transaction);
      }
      return data;
    }, []);
  };

  return addTransactionByDate(sortByDate(filterByDate(cloneData(data))));
};
