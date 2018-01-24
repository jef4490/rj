import React from 'react';
import {
  Link
} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <span><Link to="/">Home</Link></span>
      <span><Link to="/band">Band</Link></span>
      <span><Link to="/shows">Shows</Link></span>
      <span><Link to="/contact">Contact</Link></span>
    </div>
  )
}

export default NavBar
