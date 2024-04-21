import React from 'react';

export default function Kmrc() {
  return (
    <div>
      <img className='project-image' src="/images/kmrc/kmrc_logo.png" />
      <div className="flex-container">
        <div className="flex-column">
          <div className='px-1 w3-xlarge'>
            <h2> Worked As </h2>
            <p> Front-End Software Developer </p>
            <h2> Technologies Used </h2>
            <ul>
              <li> JQuery </li>
              <li> Javascript </li>
              <li> Firebase </li>
              <li> CSS </li>
              <li> HTML </li>
            </ul>
          </div>
        </div>
        <div className="flex-column">
          <div className='px-1 w3-xlarge'>
            <h2> Project Description </h2>
            <p>
              The website of Karachi Medical Research Club (KMRC) is a four pages website. 
              <br/><br/>The home page has three sections: introduction, workshops and testimonials.
              <br/><br/>The our team page contains profiles of KMRC team members.
              <br/><br/>The publications page lists all publications and provides links to the full published articles, which can also be searched by the title of the publication.
              <br/><br/>The contact page has all the social media links and the email address of the organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
