import './App.css';

import FetchChallenger from './components/FetchChallenger'
import FetchGrandmaster from './components/FetchGrandmaster'
import FetchMaster from './components/FetchMaster';
import FetchDiamond from './components/FetchDiamond';
import PatchNotes from './components/PatchNotes'

function App() {
  return (
    <div className="App">
      <h1 id="lol-header">LoL Ranked Report</h1>

      <div id="bg-img-div">
        <h2 id="leaderboards-header">Leaderboards (North America)</h2>
        <p>(Select a tier to view current rankings)</p>
        <div id="btn-div">
          <div className="scroll-div">
            <FetchChallenger />

          </div>
          <div className="scroll-div">
            <FetchGrandmaster />

          </div>
          <div className="scroll-div">
            <FetchMaster />
          </div>
          <div className="scroll-div">
            <FetchDiamond />
          </div>

        </div>
      </div>

      <PatchNotes />
    </div>
  );
}

export default App;
