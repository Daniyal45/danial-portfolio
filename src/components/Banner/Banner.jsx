
// Packages
import React from 'react';

// Utils
import { BannerImage, DaniyalIcon, PersonIcon, PhoneIcon, ProjectIcon } from '../Svgs';

function Banner() {
  return (
    <div id='Banner'>     
      <div className="col-container">
        <div className="col">
          <div className='banner-text'>
            <span>Hi I'm </span>       
            <span> Daniyal </span>
            <br />
            <span style={{ wordBreak: 'break-word' }}>A Senior Web Developer</span>
          </div>
        </div>

        <div className="col" style={{ textAlign: 'center' }}>
          <BannerImage className='banner-image' />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Banner);