import './App.css';

import FetchChallenger from './components/FetchChallenger'
import FetchGrandmaster from './components/FetchGrandmaster'
import FetchMaster from './components/FetchMaster';
import FetchDiamond from './components/FetchDiamond';
import PatchNotes from './components/PatchNotes'

function App() {
  return (
    <div className="App">
      {/* <h1 id="lol-header"><span className="hover-effect">L</span><span className="hover-effect">o</span><span className="hover-effect">L</span><span> </span><span className="hover-effect">R</span><span className="hover-effect">a</span><span className="hover-effect">n</span><span className="hover-effect">k</span ><span className="hover-effect">e</span><span className="hover-effect">d</span><span> </span><span className="hover-effect">R</span><span className="hover-effect">e</span><span className="hover-effect">p</span><span className="hover-effect">o</span><span className="hover-effect">r</span><span className="hover-effect">t</span></h1> */}

      <div id="bg-img-div">
        <h2 id="leaderboards-header">NA Leaderboards</h2>
        {/* <p>Select a tier to view current rankings</p> */}
        {/* <p>Sorted by League Points</p> */}

        <div>

        </div>

        <div id="btn-div">

          <div>
            <h4 className="tier-header"><strong>Challenger</strong></h4>
            <div className="scroll-div">
              <FetchChallenger />
              <p className="loading">Loading...</p>

              <div className="loading-div">
                <div class="loader">
                  <div class="inner one"></div>
                  <div class="inner two"></div>
                  <div class="inner three"></div>
                </div>

              </div>

            </div>

          </div>
          <div>
          <h4 className="tier-header"><strong>Grandmaster</strong></h4>
            <div className="scroll-div">
              <FetchGrandmaster />
              <p className="loading">Loading...</p>

              <div className="loading-div">
                <div class="loader">
                  <div class="inner one"></div>
                  <div class="inner two"></div>
                  <div class="inner three"></div>
                </div>

              </div>
            </div>
          </div>
          <div>
            <h4 className="tier-header"><strong>Master</strong></h4>
            <div className="scroll-div">
              <FetchMaster />
              <p className="loading">Loading...</p>

              <div className="loading-div">
                <div class="loader">
                  <div class="inner one"></div>
                  <div class="inner two"></div>
                  <div class="inner three"></div>
                </div>

              </div>
            </div>
          </div>

          {/* <div>
            <h4 className="tier-header"><strong>Diamond</strong></h4>
            <div className="scroll-div">
              <FetchDiamond />
              
              <p className="loading">Loading...</p>
              <div className="loading-div">
                <div class="loader">
                  <div class="inner one"></div>
                  <div class="inner two"></div>
                  <div class="inner three"></div>
                </div>

              </div>

            </div>
          </div> */}

        </div>
      </div>

      {/* <PatchNotes /> */}
    </div>
  );
}

export default App;
