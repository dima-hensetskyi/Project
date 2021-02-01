export const getBalance = (incomes, charges) => {
  return getIncomesSum(incomes) - getChargesSum(charges);
};

export const getIncomes = () =>
  JSON.parse(localStorage.getItem("incomes")) || [];

export const getCharges = () =>
  JSON.parse(localStorage.getItem("charges")) || [];

export const getStoredBalance = () => getBalance(getIncomes(), getCharges());

export const getIncomesSum = (incomes) =>
  incomes.reduce((total, income) => (total += +income.money), 0);

export const getChargesSum = (charges) =>
  charges.reduce((total, charge) => (total += +charge.money), 0);
