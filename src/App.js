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
        return <Upcoming styleProp={{opacity: 0.7, paddingTop: '1em', marginLeft: '1em', background: '#fff', width: '30em', paddingBottom: '1em', borderRadius: '6px'}} />
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
        <Container className="App">
          <Row>
            <div>
              <Navbar />
            </div>
            <Social />
          </Row>
          <Row style={{background: "#ddd"}}>

            <Col>
              <span>
                LEFT
              </span>
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
              <span>
                RIGHT
              </span>
            </Col>
          </Row>
          <Row>
            <p className="App-intro" style={{fontSize: 12}}>
              &copy; Ransom Jones 2019
            </p>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
