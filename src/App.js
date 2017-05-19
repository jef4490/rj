import React, { Component } from 'react';
import { Parallax } from 'react-parallax'
import logo from './logo.svg';
import './App.css';
import bgimg from './img/stockparallax.jpg';
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ransom Jones</h2>
        </div>
        <Navbar />
        <Parallax bgImage={bgimg} strength={250}>
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{height: 800}}>
            <div style={{height: '15em', paddingTop: '3em', background: '#fff', width: '20em'}}>
              Latest Gigs
            </div>
          </div>
        </Parallax>

        <p className="App-intro">
          Copywrite Ransom Jones 2017
        </p>
      </div>
    );
  }
}

export default App;
