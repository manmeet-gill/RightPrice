import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';

import conditon from './condition.json';
import brandavg from './brandavg.json';

function Bc() {
  return (
    <ResponsiveContainer width="70%" aspect={3}>
      <BarChart width={720} height={200} data={brandavg}>
        <Bar dataKey="Price Average" fill="#e91e63" />
        <CartesianGrid stroke="3 3" />
        <XAxis dataKey="Brand" />
        <YAxis dataKey="Price Average" />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Bc;
