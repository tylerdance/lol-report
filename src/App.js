// import logo from './logo.svg';
import './App.css';

import { useState } from 'react'
// import FetchData from './components/FetchData'
import FetchData2 from './components/FetchData2'
import FetchGrandmaster from './components/FetchGrandmaster'
import FetchMaster from './components/FetchMaster';
import FetchDiamond from './components/FetchDiamond';

function App() {
  // const [info, setInfo] = useState([])
  return (
    <div className="App">
      <h1 id="lol-header">LoL Ranked Report</h1>
      <h5 id="select-tier">Select a tier</h5>
      <div id="btn-div">
        <FetchData2 />
        <FetchGrandmaster />
        <FetchMaster />
        <FetchDiamond />
      </div>
    </div>
  );
}

export default App;
