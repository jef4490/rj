import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Audio from 'react-audioplayer';
import {
  Link
} from 'react-router-dom'

import {SetList} from '../constants/setlist'

class Music extends Component {

  componentWillUnmount(){
    //ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-pause'));
  }

  render() {
    let playList = [
    {
      name: "Black Friday", // song name
      src: "../music/02 Black Friday.mp3"
    },
    {
      name: "Carry On Wayward Son", // song name
      src: "../music/03 Carry On Wayward Son.mp3"
    },
    {
      name: "Uptown Funk", // song name
      src: "../music/01 Uptown Funk.mp3"
    },
    {
      name: "Gimme Some Lovin", // song name
      src: "../music/04 Gimme Some Lovin.mp3"
    }
    ];
    return (
      <div style={{margin: 'auto', width: "30%", marginTop: "5em"}}>

      </div>
    );
  }
}

//<Audio playlist={playList} ref={audioComponent => { this.audioComponent = audioComponent; }}></Audio>

export default Music
