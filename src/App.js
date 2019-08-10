import React, { Component } from 'react';
import { Parallax } from 'react-parallax'
import logo from './logo.svg';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';
import bgimg from './img/RansomJonesLogo.jpg';
import Navbar from './components/navbar'
import Upcoming from './components/upcoming'
import Contact from './components/contact'
import Songs from './components/songs'
import Music from './components/music'
import Bio from './components/bio'
import Social from './components/social'

class Gigs extends Component {
    render() {
        return <Upcoming styleProp={{opacity: 0.7, paddingTop: '1em', marginLeft: '1em', background: '#fff', minWidth: '30em', paddingBottom: '1em', borderRadius: '6px'}} />
    }
}

class Shows extends Component {
    render() {
        return <Upcoming styleProp={{opacity: 0.7, paddingTop: '1em', margin: 'auto', background: '#fff', width: '36em', paddingBottom: '1em', borderRadius: '6px'}} />
    }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div class="app-header">
          <h1 style={{marginTop: '0em'}}>Ransom Jones</h1>
          <h4>Southeast Michigan's Classic Rock Party Band</h4>
        </div>
        <Container className="App">
            <div>
              <Navbar />
            </div>
            <Social />
          <Row>

            <Col>

            </Col>

            <Col>
              <div>
                <Route exact path='/' component={Gigs} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/band' component={Bio} />
                <Route exact path='/music' component={Music} />
                <Route exact path='/songs' component={Songs} />
              </div>
            </Col>

            <Col>

            </Col>
          </Row>
          <Row>
            <p className="App-intro" style={{fontSize: 12}}>
              &copy; Ransom Jones 2019
            </p>
          </Row>
        </Container>
        </div>
      </Router>
    );
  }
}

export default App;
