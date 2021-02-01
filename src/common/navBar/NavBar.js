import React from 'react';

import CurrentBalance from '../currentBalance/CurrentBalance';
import NavLinks from '../navLinks';
import User from '../user/User';

import './NavBar.css';

const NavBar = ({ currentBalance }) => (
  <div className="navigate-wrapper">
    <User />
    <NavLinks />
    <div className="balance-wrapper">
      <CurrentBalance balance={currentBalance} />
    </div>
  </div>
);

export default NavBar;
