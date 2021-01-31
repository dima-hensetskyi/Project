import React, { useState } from 'react';

import TrackeresponsiveLine from './ResponsiveLine';
import ChargesCategoriesPie from './ChargesCategories';
import IncomesResponsiveBar from './IncomesResponsiveBar';

import dataTrackeresponsiveLine from './data/dataTrackeresponsiveLine';
import dataChargesCategories from './data/ChargesCategoriesDate';
import dataIncomesCategories from './data/IncomesCategoriesDate';

import PanelButton from './style/PanelButton';
import './style/Charts.css';

const Charts = () => {
  const [dataLine, setDataLine] = useState(dataTrackeresponsiveLine('week'));
  const [chargesCategoriesData, setChargesCategoriesData] = useState(
    dataChargesCategories('week')
  );
  const [incomesCategoriesDate, setIncomesCategoriesDate] = useState(
    dataIncomesCategories('week')
  );

  const periodСhange = (period) => {
    setDataLine(dataTrackeresponsiveLine(period));
    setChargesCategoriesData(dataChargesCategories(period));
    setIncomesCategoriesDate(dataIncomesCategories(period));
  };

  return (
    <div className="charts-wrapper">
      <div className="trackeresponsive-line-panel">
        <PanelButton content="Mounth" onClick={() => periodСhange('mounth')} />
        <PanelButton content="Week" onClick={() => periodСhange('week')} />
      </div>
      <div className="charts">{TrackeresponsiveLine({ dataLine })}</div>
      <div className="bar-pie">
        <div className="income-categories">
          {dataLine.length > 1 && <h3>Income categories</h3>}
          {IncomesResponsiveBar({ incomesCategoriesDate })}
        </div>
        <div className="charges-categories">
          {dataLine.length > 1 && <h3>Charges categories</h3>}
          {ChargesCategoriesPie({ chargesCategoriesData })}
        </div>
      </div>
    </div>
  );
};

export default Charts;
