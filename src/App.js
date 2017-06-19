import React, { Component } from 'react';
import { Parallax } from 'react-parallax'
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import bgimg from './img/RansomJonesLogo.jpg';
import Navbar from './components/navbar'
import Upcoming from './components/upcoming'
import Social from './components/social'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Navbar />
            <h1>Ransom Jones</h1>
            <h3>South East Michigan's Ultimate Classic Rock Party Band</h3>
          </div>
          <Social />
          <Parallax bgImage={bgimg} strength={250}>
            <div style={{height: 1100, maxWidth: '100%'}}>
              <Route exact path='/' component={Upcoming} />

            </div>
          </Parallax>
          <p className="App-intro" style={{fontSize: 12}}>
            &copy; Ransom Jones 2017
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
