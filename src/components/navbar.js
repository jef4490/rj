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
        <Row className="property-row">
          <Col>
            <h1 style={{marginTop: "0em"}}>Ransom Jones</h1>
          </Col>
        </Row>
        <div style={{width: "100%"}} className="force-line-break">
        </div>
        <Row className="property-row">
          <Col>
            <h5>South East Michigan's Ultimate Classic Rock Party Band</h5>
          </Col>
        </Row>
        <div style={{width: "100%"}}>
        </div>
        <Row>
          <Col><Link to="/">Home</Link></Col>
          <Col><Link to="/band">Band</Link></Col>
          <Col><Link to="/music">Music</Link></Col>
          <Col><Link to="/songs">Songs</Link></Col>
          <Col><Link to="/contact">Contact</Link></Col>
        </Row>
      </Container>
    </div>
  )
}


export default NavBar
