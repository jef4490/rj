import React from 'react';

const Upcoming = () => {
  return (
      <div style={{opacity: 0.7, paddingTop: '3em', marginLeft: '1em', background: '#fff', width: '30em', paddingBottom: '1em', borderRadius: '6px'}}>
        <h2>Upcoming Shows</h2>
        <ul style={{listStyleType: 'none'}}>
          <li>
            <h4><a target="_blank" href="http://www.webersinn.com/the-habitat">Weber's Inn</a></h4>
              <ul style={{listStyleType: 'none'}}>
                <li>
                  Saturday, July 1st - 9PM
                </li>
                <li>
                  3050 Jackson Rd, Ann Arbor, MI 48103
                </li>
              </ul>
            </li>
            <li>
              <h4>Private Event</h4>
              <ul style={{listStyleType: 'none'}}>
                <li>
                  Saturday, July 29th - 6PM
                </li>
            </ul>
          </li>
          <li>
            <h4>Private Event</h4>
            <ul style={{listStyleType: 'none'}}>
              <li>
                Saturday, September 2nd - 6PM
              </li>
            </ul>
          </li>
          <li>
            <h4>Private Event</h4>
            <ul style={{listStyleType: 'none'}}>
              <li>
                Saturday, October 28th - 8PM
              </li>
            </ul>
          </li>
          <li>
            <h4><a target="_blank" href="http://livea2.com/">Live</a></h4>
            <ul style={{listStyleType: 'none'}}>
              <li>
                Friday, January 12th - 6PM
              </li>
              <li>
                102 S 1st St, Ann Arbor, MI 48104
              </li>
          </ul>
        </li>

        </ul>
      </div>

  )
}

export default Upcoming
