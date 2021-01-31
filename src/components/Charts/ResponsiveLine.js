import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const TrackeresponsiveLine = ({ dataLine }) => (
    <ResponsiveLine
        data={dataLine}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '0',
            max: 'auto',
            stacked: true,
            reverse: false,
        }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 1,
            legendPosition: 'middle',
        }}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'category10' }}
        lineWidth={3}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableSlices="x"
        enableArea={true}
        useMesh={true}
        legends={[]}
        motionConfig={{
            mass: 1,
            tension: 289,
            friction: 16,
            clamp: false,
            precision: 0.01,
            velocity: 0,
        }}
    />
);
export default TrackeresponsiveLine;
