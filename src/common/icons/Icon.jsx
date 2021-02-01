import React from 'react';

import DeleteIcon from '../../assets/bgr/white-delete.png';
import EditIcon from '../../assets/bgr/white-edit.png';

import './Icon.css';

const Icon = ({ iconName, color = 'violet', onClick }) => {
  const getUrlByName = (iconName) => {
    switch (iconName) {
      case 'delete':
        return DeleteIcon;
      case 'edit':
        return EditIcon;
    }
  };

  return (
    <div className={`icon-button-${color}`} onClick={onClick}>
      <img src={getUrlByName(iconName)} alt={`${iconName} icon button`} />
    </div>
  );
};

export default Icon;
