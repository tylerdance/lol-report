import './App.css';

import FetchChallenger from './components/FetchChallenger'
import FetchGrandmaster from './components/FetchGrandmaster'
import FetchMaster from './components/FetchMaster';
import FetchDiamond from './components/FetchDiamond';
import PatchNotes from './components/PatchNotes'

function App() {
  return (
    <div className="App">
      <h1 id="lol-header"><span className="hover-effect">L</span><span className="hover-effect">o</span><span className="hover-effect">L</span><span > </span><span className="hover-effect">R</span><span className="hover-effect">a</span><span className="hover-effect">n</span><span className="hover-effect">k</span ><span className="hover-effect">e</span><span className="hover-effect">d</span><span> </span><span className="hover-effect">R</span><span className="hover-effect">e</span><span className="hover-effect">p</span><span className="hover-effect">o</span><span className="hover-effect">r</span><span className="hover-effect">t</span></h1>

      <div id="bg-img-div">
        <h2 id="leaderboards-header">Leaderboards (North America)</h2>
        {/* <p>Select a tier to view current rankings</p> */}
        {/* <p>Sorted by League Points</p> */}

        <div>

        </div>

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
          {/* <div className="scroll-div">
            <FetchDiamond />
          </div> */}

        </div>
      </div>

      <PatchNotes />
    </div>
  );
}

export default App;
