import React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, ScatterChart, Scatter, Legend } from 'recharts';


import con from './condition.json';


function Sc() {
  return (
    <ResponsiveContainer width="70%" aspect={3}>
    <ScatterChart width={700} height={250}>
      <CartesianGrid />
      <XAxis dataKey="Price" name="Condition" type="number" ticks={[50,100,250,500,750,1000,1200]} >
        <Label value="Product Price" offset={0} position="insideBottom" />
      </XAxis>
      <YAxis dataKey="Condition" name="Price" type="number" domain={[0, 'dataMax+1']} ticks={[1,2,3,4,5]}/>
      <Legend verticalAlign="top" height={30} />
      <Scatter data={con} fill="#8884d8" name="Product Quality per Price" />
    </ScatterChart>
    </ResponsiveContainer>
  );
}

export default Sc;
