import React from 'react';

import HomeIcon from '../../assets/bgr/house.png';
import ChartIcon from '../../assets/bgr/pie-chart.png';
import CategoryIcon from '../../assets/bgr/category.png';
import TableIcon from '../../assets/bgr/table.png';
import SettingsIcon from '../../assets/bgr/settings.png';

import './NavBarIcons.css';

const NavBarIcon = ({ iconName }) => {
  function getUrlByName(iconName) {
    switch (iconName) {
      case 'home':
        return HomeIcon;
      case 'chart':
        return ChartIcon;
      case 'categories':
        return CategoryIcon;
      case 'table':
        return TableIcon;
      case 'settings':
        return SettingsIcon;
    }
  }

  return (
    <div className="icon-navBar">
      <img src={getUrlByName(iconName)} alt={`${iconName} icon button`} />
    </div>
  );
};

export default NavBarIcon;
