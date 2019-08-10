import React from 'react';
import {
  Link
} from 'react-router-dom'

{/* <span><Link to="/band">Band</Link></span>
      <span><Link to="/music">Music</Link></span>
      <span><Link to="/songs">Songs</Link></span>
      <span><Link to="/contact">Contact</Link></span> */}
const NavBar = () => {
  return (
    <div className="navbar">
      <span><Link to="/">Home</Link></span>
      <span><Link to="/contact">Contact</Link></span>
    </div>
  )
}

export default NavBar
