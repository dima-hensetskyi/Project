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

  return sortByDate(filterByDate(cloneData(data)));
};
