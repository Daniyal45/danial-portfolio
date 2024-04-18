
// Packages
import React from 'react';

// Utils
import { EmailIcon, LinkedinIcon, WhatsappIcon } from '../';


function Contact(props) {

  return (
    <div id='Contact' ref={props?.reference}>
      <div>
        <h1 className="bold"> CONTACT </h1>
        <p className='w3-xlarge'>If you'd like to know more about my work or process feel free to get in touch.</p>
        <div >
          <div className='w3-row w3-xlarge'>
            <div className='w3-col flex items-center justify-between wrap'>
              <div>
                <div className='w3-large' style={{ marginBottom: '4px' }}>Email</div>
                <div className='flex items-center w3-margin-bottom bold'>
                  <EmailIcon className='contact-link-icon' />
                  <span className='px-2 contact-link-text'><a href="mailto:daniyal_09.2005@hotmail.com">Daniyal_09.2005@hotmail.com</a></span>
                </div>
              </div>
              <div className='h-4'></div>
              <div>
                <div className='w3-large' style={{ marginBottom: '4px' }}>Linkedin</div>
                <div className='flex items-center w3-margin-bottom bold'>
                  <LinkedinIcon className='contact-link-icon' />
                  <span className='px-2 contact-link-text'><a target="__blank" href="https://www.linkedin.com/in/daniyalhasan-45045">Daniyal Hasan Shah</a></span>
                </div>
              </div>
              <div className='h-4'></div>
              <div>
                <div className='w3-large' style={{ marginBottom: '4px' }}>Whatsapp</div>
                <div className='flex items-center w3-margin-bottom bold'>
                  <WhatsappIcon className='contact-link-icon' />
                  <span className='px-2 contact-link-text'><a target="__blank" href="https://wa.me/+923478356590">+92 3478356590</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default React.memo(Contact);