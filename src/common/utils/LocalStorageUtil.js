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
    { id: 1, category: 'food', description: '', value: 'food', label: 'Food' },
    {
      id: 2,
      category: 'clothes',
      description: '',
      value: 'clothes',
      label: 'Clothes',
    },
    {
      id: 3,
      category: 'restaurant',
      description: '',
      value: 'restaurant',
      label: 'Restaurant',
    },
    {
      id: 4,
      category: 'utility bills',
      description: '',
      value: 'utility bills',
      label: 'Utility bills',
    },
    { id: 5, category: 'pets', description: '', value: 'pets', label: 'Pets' },
  ];

export const getIncomesCategories = () =>
  JSON.parse(localStorage.getItem('incomesCategories')) || [
    { id: 1, value: 'salary', label: 'Salary' },
    { id: 2, value: 'saving', label: 'Saving' },
  ];
