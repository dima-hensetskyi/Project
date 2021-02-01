import React, { useState, useEffect } from 'react';

import NavBar from '../../common/navBar';
import CardPanel from './CardPanel';
import ChartsCards from './ChartsCards';

import { getStoredBalance } from '../../common/utils/LocalStorageUtil';

import './homePage.css';

const HomePage = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const balance = getStoredBalance();
    setBalance(balance);
  }, []);

  return (
    <div className="home-page">
      <NavBar currentBalance={balance} />
      <div>
        <CardPanel />
        <ChartsCards />
      </div>
    </div>
  );
};
export default HomePage;
