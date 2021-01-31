import React from 'react';
import { NavLink } from 'react-router-dom';

import NavBarIcon from '../icons/NavBarIcons';
import './NavLinks.css';

const NavLinks = () => (
  <div className="link-list-wrapper">
    <div className="link-list">
      <div className="list-item-wrapper">
        <NavBarIcon iconName="home" />

        <NavLink to="/home" className="app-link" activeClassName="active-link">
          Home
        </NavLink>
      </div>
      <div className="list-item-wrapper">
        <NavBarIcon iconName="chart" />
        <NavLink
          to="/charts"
          className="app-link"
          activeClassName="active-link"
        >
          Charts
        </NavLink>
      </div>
      <div className="list-item-wrapper">
        <NavBarIcon iconName="categories" />
        <NavLink
          to="/categories"
          className="app-link"
          activeClassName="active-link"
        >
          Categories
        </NavLink>
      </div>
    </div>
  </div>
);

export default NavLinks;
