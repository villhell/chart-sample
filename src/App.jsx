// import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import LineChartComponent from './components/LineChartComponent';
import Layout from './components/Layout';
import NetworkGraph from './components/NetworkGraph';
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LineChartComponent />
      <Layout />
      <NetworkGraph />
    </div>
  );
}

export default App;
