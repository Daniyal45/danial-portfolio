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
              <li> Jotai </li>
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
              Revamped the website for Saudia Private, implementing a modern look and feel UI according to their rebranded design and logo. Additionally, integrated Google Analytics to gather real-time data on website usage, for getting insights for business decisions. Utilized the i18n plugin to display website content in both English and Arabic. <br />The website consists of five pages.

              <br /><br />The home page has four sections: flight booking, fleets, services and partners. The flight booking section includes a multi stepper form to book private jet from destination to departure.
              <br /><br />The our services page has two sections: ground handling and aircraft charter.
              <br /><br />The about us page has five sections: mission, our profile, services, our presence and our holding group.
              <br /><br />The contact page has all the social media links, contact number and email address of the organization.
              <br /><br />The login and signup page has a login form for existing users and a sign up form for new users.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
