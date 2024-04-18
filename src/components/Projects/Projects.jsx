
// Packages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Utils

function Projects(props) {

  const PROJECTS = [
    {
      id: 1,
      name: 'Techris',
      project_of: 'Silver Solve',
      url: 'https://pk.linkedin.com/company/silversolve',
      base_image: '/images/techris/tch_logo.png',
      base_image_alt: 'techris_logo',
      link_to: '/techris'
    },
    {
      id: 2,
      name: 'Seat Menu',
      project_of: 'Amaxza',
      url: 'https://pk.linkedin.com/company/amaxza',
      base_image: '/images/seat menu/sm_logo.png',
      base_image_alt: 'seat_menu_logo',
      link_to: '/seat-menu'
    },
    {
      id: 3,
      name: 'Seller Xpert',
      project_of: 'Amaxza',
      url: 'https://pk.linkedin.com/company/amaxza',
      base_image: '/images/sellerxpert/sx_logo.png',
      base_image_alt: 'seller_xpert_logo',
      link_to: '/seller-xpert'
    },
    {
      id: 4,
      name: 'Teaming Way',
      project_of: 'Teaming Way Inc.',
      url: 'https://ca.linkedin.com/company/teamingway-inc',
      base_image: '/images/teaming way/tw_logo.png',
      base_image_alt: 'teaming_way_logo',
      link_to: '/teaming-way'
    },
    {
      id: 5,
      name: 'KMRC Website',
      project_of: 'KMRC',
      url: 'https://ca.linkedin.com/company/teamingway-inc',
      base_image: '/images/kmrc/kmrc_logo.png',
      base_image_alt: 'kmrc_logo',
      link_to: '/kmrc'
    },
    {
      id: 6,
      name: 'Saudia Private Website',
      project_of: 'Saudia Private',
      url: 'https://sa.linkedin.com/company/saudia-private',
      base_image: '/images/spa/spa_logo.png',
      base_image_alt: 'spa_logo',
      link_to: '/saudia-private'
    }
  ];

  const PROJECT_ITEM = (project) => (
    <div className="w3-card-4 custom-bordered-card">
      <div>
        <img
          className='image'
          src={project?.base_image}
          alt={project?.base_image_alt}
        />
      </div>
      <div className="w3-container w3-center">
        <p className='bold w3-large'>{project?.name}</p>
        <div className='py-1'>Developed for <span> {project?.project_of} </span></div>
      </div>
    </div>
  );

  return (
    <div>
      <div className=''>
        <div className="w3-row-padding">
          {
            PROJECTS?.map((project) => (
              <div className="w3-col m4 s12 w3-margin-top cursor-pointer w3-hover-opacity" key={project.id} onClick={e => props?.onClick(e, 'projects')}>
                <Link to={project?.link_to}>
                  {PROJECT_ITEM(project)}
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default React.memo(Projects);