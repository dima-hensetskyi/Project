import React from "react";
import NavBar from "../../common/navBar/NavBar";
import { getStoredBalance } from "../../common/utils/LocalStorageUtil";
import "./Charts.css";

function Charts() {
  return (
    <div className="charts-page">
      <NavBar currentBalance={getStoredBalance()} />
      <div className="tables-wrapper"></div>
    </div>
  );
}

export default Charts;
