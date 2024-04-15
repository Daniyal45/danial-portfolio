
// Packages
import React from 'react';

// Utils
import { RocketIcon } from '../Svgs';


function Contact(props) {

  return (
    <div id='Contact' ref={props?.reference}>
      <div className='relative'>
        <RocketIcon className='absolute left-0 w-36 h-36 w3-margin-left w3-margin-bottom rotate-y-180'/>
          <RocketIcon className='absolute right-0 w-36 h-36 w3-margin-right' />
      </div>
    </div>
  )
}

export default React.memo(Contact);