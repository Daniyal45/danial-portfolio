import React from 'react';

export default function SellerXpert() {
  return (
    <div>
      <img className='project-image' src="/images/sellerxpert/sx_logo.png" />
      <div className="flex-container">
        <div className="flex-column">
          <div className='px-1 w3-xlarge'>
            <h2> Worked As </h2>
            <p> Front-End Software Developer </p>
            <h2> Technologies Used </h2>
            <ul>
              <li> React JS </li>
              <li> Bootstrap </li>
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
              Seller Xpert is a drop shipping management portal. It has different modules for inventory management, vendor management, customer management, order tracking, and invoicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
