
// Packages
import React from 'react';

// Utils
import { DaniyalIcon, PersonIcon, PhoneIcon, ProjectIcon } from '../Svgs';

function Header(props) {

  const HEADER_LOGO = () => (
    <div className='header-logo'>
      <DaniyalIcon className='w-12 h-12' />
      <span className='primary-green-text bold small-left-margin'> Daniyal </span>
    </div>
  );

  const HEADER_BUTTONS = () => (
    <div className='header-buttons'>
      <div id='About-Me-Button'>
        <PersonIcon className='w-10 h-10' />
        <button className='primary-green-button' onClick={e => props?.onClick(e, 'about')}>
          About Me
        </button>
      </div>
      <div id='My-Projects-Button'>
        <ProjectIcon className='w-10 h-10' />
        <button className='primary-green-button' onClick={e => props?.onClick(e, 'projects')}>
          Projects
        </button>
      </div>
      <div id='Contact-Button'>
        <PhoneIcon className='w-10 h-10' />
        <button className='primary-green-button'>
          Contact
        </button>
      </div>
    </div>
  );

  return (
    <div id='Header'>
      <div className='px-2'>
        <div className='w3-row flex items-center wrap'>
          <div className='w3-col m4 l4 s12'>
            {HEADER_LOGO()}
          </div>
          <div className='w3-col m8 l8 s12'>
            {HEADER_BUTTONS()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header);