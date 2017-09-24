import React from 'react';

const Upcoming = (props) => {
  return (
      <div style={props.styleProp}>
        <h2>Upcoming Shows</h2>
        <ul style={{listStyleType: 'none', paddingLeft: 0}} id="gig-list">

          <li className="show-header">
              <p>08.14.17</p>
              <h4><a target="_blank" href="http://www.hellsaloon.com/">Hell Saloon</a></h4>
            <ul>
              <li>
                – 9:00 PM
              </li>
              <li>
                4095 Patterson Lake Rd.
              </li>
              <li>
                 Pinckney, MI 48169
              </li>
          </ul>
        </li>

          <li className="show-header">
            <p>10.29.17</p>
            <h4>Private Event</h4>
          <ul>
              <li>
                – 8:00 PM
              </li>
            </ul>
          </li>


          <li className="show-header">
            <p>11.11.17</p>
            <h4><a target="_blank" href="http://www.hellsaloon.com/">Hell Saloon</a></h4>
            <ul>
              <li>
                – 9:00 PM
              </li>
              <li>
                4095 Patterson Lake Rd.
              </li>
              <li>
                Pinckney, MI 48169
              </li>
            </ul>
          </li>

          <li className="show-header">
            <p>12.02.17</p>
            <h4><a target="_blank" href="http://www.zukeylaketavern.com/">Zukey Lake Tavern</a></h4>
            <ul>
              <li>
                – 8:00 PM
              </li>
              <li>
                5011 Girard Dr
              </li>
              <li>
                Pinckney, MI 48169
              </li>
            </ul>
          </li>

        <li className="show-header">
          <p>12.08.17</p>
          <h4><a target="_blank" href="http://www.hellsaloon.com/">Hell Saloon</a></h4>
          <ul>
            <li>
              – 9:00 PM
            </li>
            <li>
              4095 Patterson Lake Rd.
            </li>
            <li>
              Pinckney, MI 48169
            </li>
          </ul>
        </li>


      <li className="show-header">
        <p>01.12.18</p>
        <h4><a target="_blank" href="http://livea2.com/">Live</a></h4>
        <ul>
          <li>
            – 6:00 PM
          </li>
          <li>
            102 S 1st St.
          </li>
          <li>
            Ann Arbor, MI 48104
          </li>
      </ul>
    </li>

    </ul>
  </div>

  )
}

export default Upcoming
