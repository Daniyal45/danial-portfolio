import React from 'react';

export default function SeatMenu() {
  return (
    <div>
      <img className='project-image' src="/images/seat menu/sm_logo.png" />
      <div className="flex-container">
        <div className="flex-column">
          <div className='px-1 w3-xlarge'>
            <h2> Worked As </h2>
            <p> Front-End Software Developer </p>
            <h2> Technologies Used </h2>
            <ul>
              <li> React JS </li>
              <li> Material UI </li>
              <li> Apex Charts </li>
              <li> Websockets </li>
              <li> Rest API </li>
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
              Seat Menu is a web application combining the features of food chain business management and ordering app.
              This application is structured in a hierarchy of modules which included venue, brand, branch and menu. <br /> <br />It has two seperate portals, one for food chain business owners to manage their branches inside different venues and the other is a customer portal which serves as in-seat food ordering platform, popular for venues like stadiums, theatres, cinemas, soccer grounds and many others, making food ordering and in-seat delivery easier, faster and better without any hassle.
              It also has a dashboard screen to show different graphs and charts made using Apex Charts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
