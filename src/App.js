import './App.css';

import FetchChallenger from './components/FetchChallenger'
import FetchGrandmaster from './components/FetchGrandmaster'
import FetchMaster from './components/FetchMaster';
import FetchDiamond from './components/FetchDiamond';

function App() {
  return (
    <div className="App">
      <h1 id="lol-header">LoL Ranked Report</h1>
      <h5 id="select-tier">Select a tier</h5>
      <div id="btn-div">
        <FetchChallenger />
        <FetchGrandmaster />
        <FetchMaster />
        <FetchDiamond />
      </div>
    </div>
  );
}

export default App;
