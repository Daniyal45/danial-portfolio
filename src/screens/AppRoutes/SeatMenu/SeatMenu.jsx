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
              Seat Menu is a single platform web application which has seperate portal for food business owners to manage their food chain branches inside different venues and also has a customer portal which serves as in-seat food ordering platform, popular for venues like stadiums, theatres, cinemas, soccer grounds and many others, making food ordering and in-seat delivery easier, faster and better without any hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
