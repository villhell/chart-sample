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
function Layout() {
  return (
    <div className="card bg-primary m-1">
      <div className="card-body p-0">
        <div>
          <div className="fs-4 fw-semibold text-white">
            ¥8.26
            <span className="fs-6 fw-normal text-white">(+1.6% ↑) </span>
          </div>
          <div className="text-white">Xym</div>
        </div>
        <LineChart
          width={320}
          height={70}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          {/* <XAxis dataKey="date" /> */}
          <YAxis
            dataKey="price"
            type="number"
            domain={[6, 8]}
            stroke="#FFFFFF"
          />
          <Line type="monotone" dataKey="price" stroke="#f5f5f5" />
        </LineChart>
      </div>
    </div>
  );
}

export default Layout;
