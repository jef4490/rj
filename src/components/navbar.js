import React from 'react';
import {
  Link
} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NavBar = () => {
  return (
    <div className="navbar">
      <Container>
        <Row>
          <Col xs><Link to="/">Home</Link></Col>
          <Col xs><Link to="/band">Band</Link></Col>
          <Col xs><Link to="/music">Music</Link></Col>
          <Col xs><Link to="/songs">Songs</Link></Col>
          <Col xs><Link to="/contact">Contact</Link></Col>
        </Row>
        <div style={{width: "100%"}}>
        </div>
        <Row>
          <Col xs>
            <h1>Ransom Jones</h1>
          </Col>
        </Row>
        <div style={{width: "100%"}}>
        </div>
        <Row>
          <Col xs>
            <h3>South East Michigan's Ultimate Classic Rock Party Band</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavBar
