import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SimpleBarChart = (props) => {

  console.log('props - ', props);

  return (
    <div>
    	<BarChart width={300} height={450} data={props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey={props.playerName} fill="#8884d8" />
       <Bar dataKey={props.topAvg} fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

SimpleBarChart.propTypes = {
  data: React.PropTypes.object.isRequired,
  playerName: React.PropTypes.string.isRequired,
  topAvg: React.PropTypes.string.isRequired,
};

export default SimpleBarChart;