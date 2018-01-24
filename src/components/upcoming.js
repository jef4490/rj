import React from 'react';

const Upcoming = (props) => {
  return (
      <div style={props.styleProp}>
        <h2>Upcoming Shows</h2>
        <ul style={{listStyleType: 'none'}}>
          <li className="show-header">
            <p>01.26.18</p>
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
            <p>03.17.18</p>
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
            <p>04.21.18</p>
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
          <p>05.05.18</p>
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

      </ul>
    </div>

  )
}

export default Upcoming
