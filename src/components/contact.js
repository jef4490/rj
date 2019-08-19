import React from 'react';

const Upcoming = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{paddingTop: '1em', opacity: 0.7, paddingBottom: '2em', background: '#fff', position: 'relative', margin: 'auto', borderRadius: '6px', display: 'inline-block'}}>
        <p style={{fontSize: 18}}>For booking and all other inquiries:</p>
        <p>
          <ul style={{listStyleType: 'none', paddingInlineStart: '0px'}}>
            <h3>Jim Dana</h3>
            <li><a href="tel:1-734-489-5611">(734) 489-5611</a></li>
            <br/>
            <li><a href="mailto:jamesdana55@yahoo.com">jamesdana55@yahoo.com</a></li>
          </ul>
        </p>
        <p>
          <ul style={{listStyleType: 'none', marginTop: '2em', paddingInlineStart: '0px'}}>
            <h3>Social Media</h3>
            <li><a href="https://www.facebook.com/RansomJonesBand/" target="_blank">Facebook</a></li>
            <br/>
            <li><a href="https://www.youtube.com/channel/UCwrycklVojAPDWoLwd3PREg" target="_blank">YouTube</a></li>
            <br/>
            <li><a href="https://www.reverbnation.com/ransomjones6" target="_blank">ReverbNation</a></li>
          </ul>
        </p>
    </div>

      <div>
        <img src={require("../img/rjdrumhead.jpg")} style={{width: '95%'}}/>
      </div>
    </div>
  )
}

export default Upcoming
