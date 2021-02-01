import React, { useState } from 'react';
import {
  FormGroup,
  FormControlLabel,
  Switch,
  TextField,
} from '@material-ui/core';
import { getStoredBalance } from '../../common/utils/LocalStorageUtil';
import NavBar from '../../common/navBar';
import {
  getSettings,
  getUser,
  setItem,
} from '../../common/utils/LocalStorageUtil';
import './Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState(getSettings());
  const [user, setUser] = useState(getUser());
  const [invalidFields, setInvalidFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleInputChange = ({ target: { value } }, fieldName) => {
    setUser({ ...user, [fieldName]: value });
    setInvalidFields({
      ...invalidFields,
      [fieldName]: !isFieldValid(fieldName),
    });
  };

  // const checkName = (name) => {

  //   return name.length >= 3;
  // };

  const checkEmailAddress = (email) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(String([email]).toLowerCase());
  };

  const checkPassword = (passwordStr) => {
    const regex = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    );
    return regex.test(String([passwordStr]).toLowerCase());
  };

  const isFieldValid = (fieldName) => {
    if (fieldName === 'firstName' || fieldName === 'lastName') {
      const name = user[fieldName];
      return name.length >= 3;
    } else if (fieldName === 'email') {
      return checkEmailAddress(user[fieldName]);
    } else if (fieldName === 'password') {
      return checkPassword(user[fieldName]);
    }
  };

  const isNotEmptyAllFields = () => {
    for (let key in user) {
      if (user[key] === '') {
        return false;
      }
    }
    return true;
  };

  const isValidAllFields = () => {
    for (let key in invalidFields) {
      if (invalidFields[key] === false) {
        return true;
      }
    }
    return false;
  };

  const validateFields = () => {
    for (let key in invalidFields) {
      setInvalidFields((fields) => {
        return { ...fields, [key]: !isFieldValid(key) };
      });
    }
  };

  const isPossibleSave = () => isValidAllFields() && isNotEmptyAllFields();

  const clearUserData = () => {
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      photo: '',
    });
  };

  return (
    <div className="settings-page">
      <NavBar currentBalance={getStoredBalance()} />
      <div className="settings-wrapper">
        <div className="balance-settings-wrapper">
          <div className="switch-block">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="default"
                    checked={settings.isNeedWarningBalance}
                    onChange={({ target: { checked } }) => {
                      setItem('settings', {
                        ...settings,
                        isNeedWarningBalance: checked,
                      });
                      setSettings({
                        ...settings,
                        isNeedWarningBalance: checked,
                      });
                    }}
                  />
                }
                label="Do you want to enable a balance limit notification?"
              />
            </FormGroup>
          </div>
          <TextField
            type="number"
            variant="outlined"
            placeholder="Minimal balance"
            value={settings.minBalance}
            onChange={({ target: { value } }) => {
              setItem('settings', { ...settings, minBalance: value });
              setSettings({ ...settings, minBalance: value });
            }}
          />
        </div>
        <div className="user-settings-wrapper">
          <div className="name-block">
            <TextField
              required
              label="First Name"
              variant="outlined"
              value={user.firstName}
              onChange={(e) => handleInputChange(e, 'firstName')}
              error={invalidFields['firstName']}
            />
            <div className="spacer" />
            <TextField
              required
              label="Last Name"
              variant="outlined"
              value={user.lastName}
              onChange={(e) => handleInputChange(e, 'lastName')}
              error={invalidFields['lastName']}
            />
          </div>
          <div className="user-info-block">
            <TextField
              required
              label="Email Address"
              variant="outlined"
              value={user.email}
              onChange={(e) => handleInputChange(e, 'email')}
              error={invalidFields['email']}
            />
            <div className="spacer" />
            <TextField
              required
              label="Password"
              type="password"
              variant="outlined"
              value={user.password}
              onChange={(e) => handleInputChange(e, 'password')}
              error={invalidFields['password']}
            />
            <div className="spacer" />
            <TextField
              label="Photo"
              type="photo"
              variant="outlined"
              value={user.photo}
              onChange={(e) => handleInputChange(e, 'photo')}
            />
          </div>
          <div className="spacer" />
          <div className="save-button-block">
            <button
              className="save-button"
              onClick={() => {
                validateFields();
                if (isPossibleSave()) {
                  setItem('user', user);
                  alert(`New user ${user.firstName} added`);
                  clearUserData();
                }
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
