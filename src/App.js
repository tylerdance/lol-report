// import logo from './logo.svg';
import './App.css';

import { useState } from 'react'
// import FetchData from './components/FetchData'
import FetchData2 from './components/FetchData2'

function App() {
  // const [info, setInfo] = useState([])
  return (
    <div className="App">
      <h1 id="lol-header">LoL Ranked Report</h1>
      <h5 id="select-tier">Select a tier</h5>
      <FetchData2 />
    </div>
  );
}

export default App;
