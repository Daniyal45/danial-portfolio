// Packages
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Utils
import { Projects } from '../../components';
import Techris from './Techris/Techris';
import SeatMenu from './SeatMenu/SeatMenu';
import SellerXpert from './SellerXpert/SellerXpert';
import TeamingWay from './TeamingWay/TeamingWay';
import Kmrc from './Kmrc/Kmrc';
import SaudiaPrivate from './SaudiaPrivate/SaudiaPrivate';

export default function AppRoutes() {
  return (
    <div id="routes">
      <Routes>
        <Route path="/" element={<Projects />} /> {/* 👈 Renders at /#/app/ */}
        <Route path="/techris" element={<Techris />} />
        <Route path="/seat-menu" element={<SeatMenu />} />
        <Route path="/seller-xpert" element={<SellerXpert />} />
        <Route path="/teaming-way" element={<TeamingWay />} />
        <Route path="/kmrc" element={<Kmrc />} />
        <Route path="/saudia-private" element={<SaudiaPrivate />} />
      </Routes>
    </div>
  )
}
