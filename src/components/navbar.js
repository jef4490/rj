import React from 'react';
import {
  Link, withRouter
} from 'react-router-dom'

const NavBar = (props) => {
  let links = [
    {route: '/', label: 'Home'},
    {route: '/songs', label: 'Songs'},
    // {route: '/music', label: 'Music'},
    {route: '/band', label: 'Band'},
    {route: '/contact', label: 'Contact'},
  ];

  let formatedLinks = links.map((link, idx) => {
    let className = 'unhighlighted-route';
    if(props.location.pathname === link.route){
      className = 'highlight-route';
    }
    return (
      <span key={idx}>
        <Link to={link.route} className={className}>{link.label}</Link>
      </span>
    )
  })
  return (
    <div className="navbar">
      {formatedLinks}
    </div>
  )
}

export default withRouter(NavBar)
