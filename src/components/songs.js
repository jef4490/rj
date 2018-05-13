import React from 'react';
import {
  Link
} from 'react-router-dom'

import {SetList} from '../constants/setlist'

const Songs = () => {

  var setListFormatted = SetList.map((songsPairing) => {
    if(songsPairing[0] == "Song"){
      return <span className="clearfix"><h3 style={{display: 'inline-block', float: 'left', textDecoration: 'underline', marginLeft: '2em'}}>{songsPairing[0]}</h3> <h3 style={{display: 'inline-block', float: 'right', textDecoration: 'underline', marginRight: '2em'}}>{songsPairing[1]}</h3></span>
    }
    return <span className="clearfix"><h4 className="songDisplay">{songsPairing[0]}</h4> <h4 className='artistDisplay'>{songsPairing[1]}</h4></span>
  })

  var setListReFormatted = <span className='clearfix'><h3 style={{display: 'inline-block', float: 'left'}}>Song</h3> <h3 style={{display: 'inline-block', float: 'right'}}>Artist</h3></span> + setListFormatted

  return (
    <div>
      <div style={{padding: '1em', opacity: 0.7, background: '#fff', position: 'relative', width: '50%', margin: 'auto', borderRadius: '6px', marginTop: '8em'}}>
        <h2>Repertoire</h2>
        <br/>
        <p style={{fontSize: 18}}>
          We play music through the decades. Here is a sample of song of the songs we know. <Link to='/contact'>Contact us</Link> for special requests!
        </p>
      </div>
      <div style={{padding: '1em', opacity: 0.7, background: '#fff', position: 'relative', width: '50%', margin: 'auto', borderRadius: '6px', marginTop: '3em'}}>
        {setListFormatted}
      </div>
    </div>
  )
}

export default Songs
