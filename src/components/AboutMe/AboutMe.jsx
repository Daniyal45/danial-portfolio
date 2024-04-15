
// Packages
import React from 'react';


function AboutMe(props) {

  return (
    <div id='About-Me' ref={props?.reference}>
      <h1 className='bold'> ABOUT ME </h1>
      <p className='w3-xlarge'>
        I'm a passionately curious and determined individual with strong work ethics having a Master’s degree in
        computer science and +6 years of experience working in the I.T sector with expertise in React & Python.
        I'm dedicated to crafting seamless online experiences and executing innovative software solutions to enhance business productivity. Well-versed in technology and writing code  to create systems that are reliable and user-friendly.
        <br /> During my professional journey I have completed different types of tasks some of which are:
      </p>
      <ul style={{ lineHeight: '1.6em' }} className='w3-xlarge'>
        <li>Built an entire web application from scratch using react. </li>
        <li>Migrated complete UI of an existing web application from non-react to react.</li>
        <li>Created react components and views for specific pages in a non-react web application.</li>
        <li>Maintenance and enhancement of an existing react web application.</li>
        <li>Mentored junior developers to familiarize with the code base of an ongoing project.</li>
      </ul>
    </div>
  )
}

export default React.memo(AboutMe);