import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { data } from '../data/data';
function LineChartComponent() {
  return (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="date" />
      <YAxis dataKey="price" type="number" domain={[6, 6.5]} />
      <Tooltip />
      {/* <Line type="monotone" dataKey="xem" stroke="#ff7300" /> */}
      <Line type="monotone" dataKey="price" stroke="#387908" />
      <Legend />
    </LineChart>
  );
}

export default LineChartComponent;
