import React from 'react';

import { getUser } from '../utils/LocalStorageUtil';

import './User.css';

const User = () => {
  const user = getUser();

  return (
    <div className="user-wrapper">
      <div className="photo">
        <img src={user.photo} alt="user photo" />
      </div>
      <span className="user-name">{`Hello ${user.firstName}`}</span>
    </div>
  );
};

export default User;
