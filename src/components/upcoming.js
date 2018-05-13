import React from 'react';

const Upcoming = (props) => {
  return (
      <div style={props.styleProp}>
        <h2>Upcoming Shows</h2>
        <ul style={{listStyleType: 'none'}}>
          <li className="show-header">
            <p>07.17.18</p>
            <h4><a target="_blank" href="https://chelseafestivals.com/soundsights/schedule/">Chelsea Sights & Sounds</a></h4>
            <ul>
              <li>
                – 6:30 PM
              </li>
              <li>
                East Middle Street Stage
              </li>
              <li>
                Chelsea, MI 48118
              </li>
            </ul>
          </li>

          <li className="show-header">
            <p>07.28.18</p>
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
            <p>08.18.18</p>
            <h4><a target="_blank" href="http://www.zukeylaketavern.com/">Private Event</a></h4>
            <ul>
            </ul>
          </li>


        <li className="show-header">
          <p>09.28.18</p>
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
          <p>11.10.18</p>
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
