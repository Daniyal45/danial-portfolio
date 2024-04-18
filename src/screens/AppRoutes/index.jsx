// Packages
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Utils
import { Projects, BackIcon } from '../../components';
import Techris from './Techris/Techris';
import SeatMenu from './SeatMenu/SeatMenu';
import SellerXpert from './SellerXpert/SellerXpert';
import TeamingWay from './TeamingWay/TeamingWay';
import Kmrc from './Kmrc/Kmrc';
import SaudiaPrivate from './SaudiaPrivate/SaudiaPrivate';

export default function AppRoutes(props) {
  const location = useLocation();
  const { pathname } = location;


  return (
    <div id="routes">
      <Routes>
        <Route path="/" element={<Projects onClick={props?.onClick}/>} /> {/* 👈 Renders at /#/app/ */}
        <Route path="/techris" element={<Techris />} />
        <Route path="/seat-menu" element={<SeatMenu />} />
        <Route path="/seller-xpert" element={<SellerXpert />} />
        <Route path="/teaming-way" element={<TeamingWay />} />
        <Route path="/kmrc" element={<Kmrc />} />
        <Route path="/saudia-private" element={<SaudiaPrivate />} />
      </Routes>
      {pathname !== '/'
        &&
        <Link to='/'>
          <button onClick={e => props?.onClick(e, 'projects')} className='back-button primary-green-button'>  <BackIcon className='w-8 h-8' /> <span className='px-1'>Back to Projects </span></button>
        </Link>
      }
    </div>
  )
}
