import React from 'react';
import { NavLink } from 'react-router-dom';

import NavBarIcon from '../icons/NavBarIcons';
import './NavLinks.css';

const NavLinks = () => (
  <div className="link-list-wrapper">
    <div className="link-list">
      <NavLink to="/home" className="app-link" activeClassName="active-link">
        <div className="list-item-wrapper">
          <NavBarIcon iconName="home" />
          Home
        </div>
      </NavLink>
      <NavLink to="/charts" className="app-link" activeClassName="active-link">
        <span className="list-item-wrapper">
          <NavBarIcon iconName="chart" />
          Charts
        </span>
      </NavLink>
      <NavLink
        to="/categories"
        className="app-link"
        activeClassName="active-link"
      >
        <span className="list-item-wrapper">
          <NavBarIcon iconName="categories" />
          Categories
        </span>
      </NavLink>
      <NavLink to="/tables" className="app-link" activeClassName="active-link">
        <span className="list-item-wrapper">
          <NavBarIcon iconName="table" />
          Incomes/Charges
        </span>
      </NavLink>
      <NavLink
        to="/settings"
        className="app-link"
        activeClassName="active-link"
      >
        <span className="list-item-wrapper">
          <NavBarIcon iconName="settings" />
          Settings
        </span>
      </NavLink>
    </div>
  </div>
);

export default NavLinks;
