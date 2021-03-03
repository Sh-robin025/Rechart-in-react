import React from 'react';
import AreaChartFillByValue from './charts/AreaChartFillByValue';
import BarChartBg from './charts/BarChart';
import Linechart from './charts/Linechart';
import StackedAreaChart from './charts/StackedAreaChart';
import SynchronizedAreaChart from './charts/SynchronizedAreaChart';

const Body = () => {
    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gridGap: '20px',
        margin: '30px'
    }

    return (
        <div style={style}>
            <Linechart />
            <BarChartBg />
            <StackedAreaChart />
            <AreaChartFillByValue />
            <SynchronizedAreaChart />
        </div>
    );
};

export default Body;