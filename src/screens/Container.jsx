// Packages
import React, { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";

// Utils
import { Header, Banner, AboutMe, Footer, Contact } from '../components'
import AppRoutes from './AppRoutes';

export default function Container() {

  const AboutRef = useRef(null);
  const ProjectsRef = useRef(null);

  const handleClickScroll = (e, ref) => {
    console.log(ref);
    if (ref === 'about') {
      AboutRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'projects'){
      ProjectsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  };

  return (
    <>
      <div id='Container'>
        <Header onClick={handleClickScroll} />
        <Banner />
        <AboutMe reference={AboutRef} />
        <div id='Projects' ref={ProjectsRef}>
          <h1 className='bold'> PROJECTS PORTFOLIO </h1>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}
