export const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getBalance = (incomes, charges) => {
  return getIncomesSum(incomes) - getChargesSum(charges);
};

export const getIncomes = () =>
  JSON.parse(localStorage.getItem('incomes')) || [];

export const getCharges = () =>
  JSON.parse(localStorage.getItem('charges')) || [];

export const getStoredBalance = () => getBalance(getIncomes(), getCharges());

export const getIncomesSum = (incomes) =>
  incomes.reduce((total, income) => (total += +income.money), 0);

export const getChargesSum = (charges) =>
  charges.reduce((total, charge) => (total += +charge.money), 0);

export const getSettings = () =>
  JSON.parse(localStorage.getItem('settings')) || {
    isNeedWarningBalance: false,
    minBalance: null,
  };

export const getUser = () =>
  JSON.parse(localStorage.getItem('user')) || {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    photo: '',
  };

export const getChargesCategories = () =>
  JSON.parse(localStorage.getItem('chargesCategories')) || [
    { value: 'food', label: 'Food' },
    { value: 'clothes', label: 'Clothes' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'utility bills', label: 'Utility bills' },
    { value: 'pets', label: 'Pets' },
  ];
