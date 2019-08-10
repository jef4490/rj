import React from 'react';
import {
  Link
} from 'react-router-dom'

import {SetList} from '../constants/setlist'

const Songs = () => {

  var setListFormatted = SetList.map((songsPairing) => {
    if(songsPairing[0] == "Song"){
      return <span id="song-header-container" className="song-entry">
        <h3 className="song-header">{songsPairing[0]}</h3> 
        <h3 className="song-header">{songsPairing[1]}</h3>
      </span>
    }
    return <span className="song-entry"><h4 className="songDisplay">{songsPairing[0]}</h4><span className="song-entry-spacer"></span><h4 className='artistDisplay'>{songsPairing[1]}</h4></span>
  })

  return (
    <div id="songs-container">
      <div>
        <h2>Repertoire</h2>
        <br/>
        <p style={{fontSize: 18}}>
          We play music through the decades. Here is a sample of song of the songs we know. <Link to='/contact'>Contact us</Link> for special requests!
        </p>
      </div>
      <div>
        {setListFormatted}
      </div>
    </div>
  )
}

export default Songs
