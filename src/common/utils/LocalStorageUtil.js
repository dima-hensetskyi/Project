export const getBalance = (incomes, charges) => {
  const incomesSum = incomes.reduce(
    (total, income) => (total += +income.money),
    0
  );
  const chargesSum = charges.reduce(
    (total, charge) => (total += +charge.money),
    0
  );
  return incomesSum - chargesSum;
};

export const getIncomes = () =>
  JSON.parse(localStorage.getItem('incomes')) || [];

export const getCharges = () =>
  JSON.parse(localStorage.getItem('charges')) || [];

export const getStoredBalance = () => getBalance(getIncomes(), getCharges());
