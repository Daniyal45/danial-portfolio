
// Packages
import React, { useState } from 'react';

// Utils
import { ClockIcon } from '../Svgs';


function Footer() {

  const STEPPER = () => (
    <div className="container">
      <div className="step completed">
        <div className="content-date">
          Jan 2023 - Present
        </div>
        <div className="v-stepper">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="content">
          Saudia Private
        </div>
      </div>
      <div className="step completed">
        <div className="content-date">
          Nov 2021 - Dec 2022
        </div>
        <div className="v-stepper">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="content">
          Teaming Way Inc
        </div>
      </div>
      <div className="step completed">
        <div className="content-date">
          Jun 2019 - Oct 2021
        </div>
        <div className="v-stepper">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="content">
          Amaxza
        </div>
      </div>
      <div className="step completed">
        <div className="content-date">
          Jun 2017 - May 2019
        </div>
        <div className="v-stepper">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="content">
          Silver Solve
        </div>
      </div>
    </div>
  );

  const WORK_HISTORY = () => (
    <div className='semi-circle'>
      <div className='flex items-center justify-center w3-margin-bottom'>
        <ClockIcon className='w3-text-white w-10 h-10' />
        <span className='bold w3-text-white px-1'> Work History </span>
      </div>
      {STEPPER()}
    </div>
  );

  return (
    <div id="Footer">
      <div className='footer-top-border-thick'>
        <div>
          <span className='no-opacity'>ok</span>          
          {WORK_HISTORY()}
        </div>
      </div>
    </div>
  )
};

export default React.memo(Footer);