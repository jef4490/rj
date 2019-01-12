import React from 'react';

const Upcoming = (props) => {
  return (
      <div style={props.styleProp}>
        <h2>Upcoming Shows</h2>
        <ul style={{listStyleType: 'none'}}>

          <li className="show-header">
            <p>01.19.19</p>
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
          <p>02.09.19</p>
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
          <p>02.22.19</p>
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
          <p>03.02.19</p>
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
          <p>03.29.19</p>
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
          <p>05.10.19</p>
          <h4><a target="_blank" href="http://livea2.com/">LIVE</a></h4>
          <ul>
            <li>
              – 6:00 PM
            </li>
            <li>
              102 S 1st St, Ann Arbor, MI 48104
            </li>
            <li>
              Ann Arbor, MI 48103
            </li>
          </ul>
        </li>

      </ul>
    </div>

  )
}

export default Upcoming
