import React from 'react';

import { Gigs } from '../constants/gigs';

const Upcoming = (props) => {

  let formattedGigs = Gigs.map((gig, idx) => {
    return(
      <li className="show-header" key={idx}>
        <p>{gig.date}</p>
        <h4><a target="_blank" href={gig.url}>{gig.venue}</a></h4>
        <ul>
          <li>
            – {gig.time}
          </li>
          <li>
            {gig.address1}
          </li>
          <li>
            {gig.address2}
          </li>
        </ul>
      </li>
    )
  })

  if(!Gigs.length) {
    formattedGigs = (
      <h5 style={{marginTop: '2em'}}>Sorry, nothing announced at this time! <br/>Check back for updates as we have them.</h5>
    )
  }

  return (
      <div id="gig-container" style={props.styleProp}>
        <h2>Upcoming Shows</h2>
        <ul style={{listStyleType: 'none'}}>

        {formattedGigs}

      </ul>
    </div>

  )
}

export default Upcoming
