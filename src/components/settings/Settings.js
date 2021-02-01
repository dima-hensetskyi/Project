import React, { useState } from "react";

const SettingsPage = () => {
  const storedSettings = JSON.parse(localStorage.getItem("settings"));
  const [settings, setSettings] = useState(
    storedSettings || {
      isNeedWarningBalance: false,
      minBalance: null,
    }
  );

  const handleCheckWarningBalance = ({ target: { checked } }) => {
    setSettings({ ...settings, isNeedWarningBalance: checked });
    localStorage.setItem("settings", JSON.stringify(settings));
  };

  const handleMinBalanceChange = ({ target: { value } }) => {
    console.log("hello");
    setSettings({ ...settings, minBalance: value });
    localStorage.setItem("settings", JSON.stringify(settings));
  };
  return (
    <div className="settings-wrapper">
      <div>
        <checkbox type="checkbox" onChange={handleCheckWarningBalance} />
        <label>Warn?</label>
      </div>
      <input
        type="number"
        placeholder="Minimal balance"
        onChange={handleMinBalanceChange}
      />
    </div>
  );
};

export default SettingsPage;
