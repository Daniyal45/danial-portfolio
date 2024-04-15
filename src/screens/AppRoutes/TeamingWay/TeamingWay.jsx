import React from 'react';

export default function TeamingWay() {
  return (
    <div>
      <img className='project-image' src="/images/teaming way/tw_logo.png" />
      <div className="flex-container">
        <div className="flex-column">
          <div className='px-1 w3-xlarge'>
            <h2> Worked As </h2>
            <p> Front-End Software Developer </p>
            <h2> Technologies Used </h2>
            <ul>
              <li> React JS </li>
              <li> Next JS </li>
              <li> Tailwind </li>
              <li> Google Analytics </li>
              <li> Rest API </li>
              <li> Websockets </li>
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
              Teaming Way is a single window remote team management solution. It enables remote teams to connect with on a single platform to assign tasks, send notifications to teammates, track work progress and discuss the work requirements with colleagues.
              <br />
              <br />
              It integrates the features of Workspace Analytics, Performance Overview, Audio/Video Meeting and Document Management.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
