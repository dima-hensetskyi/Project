import React from 'react';

import Charts from './Charts';
import NavBar from '../../common/navBar/NavBar';

import './style/ChartsPage.css';

const ChartsPage = () => {
  return (
    <div className="charts-page">
      <NavBar />
      <Charts />
    </div>
  );
};

export default ChartsPage;
