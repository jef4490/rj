import React, { Component } from 'react';
import { Parallax } from 'react-parallax'
import logo from './logo.svg';
import './App.css';
import bgimg from './img/RansomJonesLogo.jpg';
import Navbar from './components/navbar'
import Social from './components/social'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Ransom Jones</h1>
          <h3>South East Michigan's Ultimate Classic Rock Party Band</h3>
        </div>
        <Social />
        {/* <Navbar /> */}
        <Parallax bgImage={bgimg} strength={250}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div style={{height: 1100, maxWidth: '100%'}}>
            <div style={{opacity: 0.7, paddingTop: '3em', marginLeft: '1em', background: '#fff', width: '30em', paddingBottom: '1em', borderRadius: '6px'}}>
              <h2>Upcoming Shows</h2>
              <ul style={{listStyleType: 'none'}}>
                <li>
                  <h4><a target="_blank" href="http://www.webersinn.com/the-habitat">Weber's Inn</a></h4>
                    <ul style={{listStyleType: 'none'}}>
                      <li>
                        Saturday, July 1st - 9PM
                      </li>
                      <li>
                        3050 Jackson Rd, Ann Arbor, MI 48103
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Private Event</h4>
                    <ul style={{listStyleType: 'none'}}>
                      <li>
                        Saturday, July 29th - 6PM
                      </li>
                  </ul>
                </li>
                <li>
                  <h4>Private Event</h4>
                  <ul style={{listStyleType: 'none'}}>
                    <li>
                      Saturday, September 2nd - 6PM
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Private Event</h4>
                  <ul style={{listStyleType: 'none'}}>
                    <li>
                      Saturday, October 28th - 8PM
                    </li>
                  </ul>
                </li>
                <li>
                  <h4><a target="_blank" href="http://livea2.com/">Live</a></h4>
                  <ul style={{listStyleType: 'none'}}>
                    <li>
                      Friday, January 12th - 6PM
                    </li>
                    <li>
                      102 S 1st St, Ann Arbor, MI 48104
                    </li>
                </ul>
              </li>

              </ul>
            </div>
          </div>


        </Parallax>

        <p className="App-intro" style={{fontSize: 12}}>
          &copy; Ransom Jones 2017
        </p>
      </div>
    );
  }
}

export default App;
