import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const IncomesResponsiveBar = ({ incomesCategoriesDate }) => (
  <ResponsiveBar
    data={incomesCategoriesDate}
    keys={['Income']}
    indexBy="label"
    margin={{ top: 10, right: 50, bottom: 50, left: 50 }}
    padding={0.6}
    innerPadding={1}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'category10' }}
    borderRadius={2}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['brighter', '0.6']] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -30,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Income',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    enableGridY={false}
    label={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
export default IncomesResponsiveBar;
