// Packages
import React, { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";

// Utils
import { Header, Banner, AboutMe, Footer, Contact, RocketIcon } from '../components'
import AppRoutes from './AppRoutes';

export default function Container() {

  const AboutRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  const handleClickScroll = (e, ref) => {
    if (ref === 'about') {
      AboutRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'projects') {
      ProjectsRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'contact') {
      ContactRef.current.scrollIntoView({ behavior: 'smooth' })
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
            <AppRoutes onClick={handleClickScroll} />
          </BrowserRouter>
        </div>
        <Contact reference={ContactRef} />
      </div>
      <div className='relative'>
        <RocketIcon className='absolute left-0 w-36 h-36 w3-margin-left w3-margin-bottom rotate-y-180' />
        <RocketIcon className='absolute right-0 w-36 h-36 w3-margin-right' />
      </div>
      <Footer />
    </>
  )
}
