import React from 'react';
import Facebook from 'react-icons/lib/fa/facebook';
import Email from 'react-icons/lib/fa/envelope-o';

const Social = () => {
  return (
    <span id='social'>
      <a href="https://www.facebook.com/RansomJonesBand/" target="_blank">
        <Facebook className="icon"/>
      </a>
       - <a href="mailto:jamesdana55@yahoo.com">
           <Email className="icon"/>
         </a>
    </span>
  )
}

export default Social
