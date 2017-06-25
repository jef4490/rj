import React from 'react';

const Upcoming = () => {
  return (
      <div style={{paddingTop: '1em', opacity: 0.7, paddingBottom: '2em', background: '#fff', top: '10em', position: 'relative', width: '40%', margin: 'auto', borderRadius: '6px'}}>
        <p style={{fontSize: 18}}>For booking and all other inquiries:</p>
        <p>
          <ul style={{listStyleType: 'none'}}>
            <h3>Jim Dana</h3>
            <li><a href="tel:1-734-489-5611">(734) 489-5611</a></li>
            <br/>
            <li><a href="mailto:jamesdana55@yahoo.com">jamesdana55@yahoo.com</a></li>
          </ul>
        </p>
        <p>
          <ul style={{listStyleType: 'none', marginTop: '4em'}}>
            <h3>Social Media</h3>
            <li><a href="https://www.facebook.com/RansomJonesBand/" target="_blank">Facebook</a></li>
            <br/>
            <li><a href="https://www.youtube.com/channel/UCwrycklVojAPDWoLwd3PREg" target="_blank">YouTube</a></li>
            <br/>
            <li><a href="https://www.reverbnation.com/ransomjones6" target="_blank">ReverbNation</a></li>
          </ul>
        </p>
      </div>
  )
}

export default Upcoming
