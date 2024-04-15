import React from 'react';

export default function SaudiaPrivate() {
  return (
    <div>
      <img className='project-image' src="/images/spa/spa_logo.png" />
      <div className="flex-container">
        <div className="flex-column">
          <div className='px-1 w3-xlarge'>
            <h2> Worked As </h2>
            <p> Lead Software Engineer </p>
            <h2> Technologies Used </h2>
            <ul>
              <li> React JS </li>
              <li> Next JS </li>
              <li> Python </li>
              <li> Google Analytics </li>
              <li> Rest API </li>  
              <li> i18next Translation </li>            
              <li> Javascript </li>
              <li> CSS </li>
              <li> HTML </li>
            </ul>
          </div>
        </div>
        <div className="flex-column">
          <div className='px-1 w3-xlarge'>
            <h2> Project Description </h2>
            <p>
              Website of Saudia Private is a five pages website which can be viewed in both English and Arabic. 
              <br/><br/>The Home page has four sections; flight booking, fleets, services and partners. The flight booking section includes a multi stepper form to book private jet from destination to departure.
              <br/><br/>The Our services page has two sections; ground handling and aircraft charter.
              <br/><br/>The About us page has five sections; mission, our profile, services, our presence and our holding group.
              <br/><br/>The contact page has all the social media links, contact number and email address of the organization.
              <br/><br/>The login and signup page has a login form for existing users and a sign up form for new users.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
