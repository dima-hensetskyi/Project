import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const ChargesCategoriesPie = ({ chargesCategoriesData }) => (
  <ResponsivePie
    data={chargesCategoriesData}
    margin={{ top: 20, right: 80, bottom: 20, left: 0 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors={{ scheme: 'category10' }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['darker', '0.2']] }}
    enableRadialLabels={false}
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={3}
    radialLabelsTextColor="#333333"
    radialLabelsLinkColor={{ from: 'color' }}
    enableSliceLabels={false}
    sliceLabelsRadiusOffset={0.75}
    sliceLabelsSkipAngle={10}
    sliceLabelsTextColor="#333333"
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 20,
        translateY: 0,
        itemWidth: 25,
        itemHeight: 20,
        itemsSpacing: 18,
        symbolSize: 30,
        itemDirection: 'left-to-right',
      },
    ]}
  />
);

export default ChargesCategoriesPie;
