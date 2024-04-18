import React from 'react';

export default function Techris() {
  return (
    <div>
      <img className='project-image' src="/images/techris/tch_logo.png" />
      <div className="flex-container">
        <div className="flex-column">
          <div className='px-1 w3-xlarge'>
            <h2> Worked As </h2>
            <p> Full-Stack Developer </p>
            <h2> Technologies Used </h2>
            <ul>
              <li> Python </li>
              <li> Javascript </li>
              <li> Postgres </li>
              <li> Rest API </li>
              <li> HTML </li>
              <li> CSS </li>
              <li> SQL </li>
            </ul>
          </div>
        </div>
        <div className="flex-column">
          <div className='px-1 w3-xlarge'>
            <h2> Project Description </h2>
            <p>
              Techris serves as a comprehensive ERP system tailored for school administration purposes. It streamlines the management of school records, offering extensive functionalities. With its robust finance module, Techris facilitates the tracking of student fees and school expenses, providing a complete overview of the institution's financial status. Moreover, it centralizes payroll management for teachers, staff, and administrators.
              <br /><br/> Techris helps maintain the archives of students with performance tracking and grading.
              <br /> Admin can send important details to the parents through Emails or SMS. Techris is tailored to meet the requirements of modern educational institutions focused on delivering top-notch administrative experiences. Additionally, it provides comprehensive Profit and Loss statements, covering monthly, quarterly, semi-annual, and annual periods.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
