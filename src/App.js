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
import Contact from './components/contact'
import Songs from './components/songs'
import Bio from './components/bio'
import Social from './components/social'

class Gigs extends Component {
    render() {
        return <Upcoming styleProp={{opacity: 0.7, paddingTop: '1em', marginLeft: '1em', background: '#fff', width: '30em', paddingBottom: '1em', borderRadius: '6px'}} />
    }
}

class Shows extends Component {
    render() {
        return <Upcoming styleProp={{opacity: 0.7, paddingTop: '1em', margin: 'auto', background: '#fff', width: '36em', paddingBottom: '1em', borderRadius: '6px', marginTop: '8em'}} />
    }
}

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
              <Route exact path='/' component={Gigs} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/band' component={Bio} />
              <Route exact path='/shows' component={Shows} />
              <Route exact path='/songs' component={Songs} />

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
