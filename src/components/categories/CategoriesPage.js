import React from 'react';

import CategoriesTable from './CategoriesTable';
import NavBar from '../../common/navBar';
import {
  getChargesCategories,
  getStoredBalance,
  setItem,
} from '../../common/utils/LocalStorageUtil';

import './CategoriesPage.css';

const CategoriesPage = () => (
  <div className="categories-page">
    <NavBar currentBalance={getStoredBalance()} />
    <div className="categories-tables-wrapper">
      <CategoriesTable
        storedCategories={getChargesCategories()}
        onChange={(categories) => setItem('chargesCategories', categories)}
      />
    </div>
  </div>
);

export default CategoriesPage;
