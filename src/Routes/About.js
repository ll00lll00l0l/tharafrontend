import React from 'react'
import {  Routes } from 'react-router-dom';
import  NavbarWhite  from'../components/NavbarWhite.js';
import ConnectUs from '../components/ConnectUs.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Bannerabout.js';
import Misson1 from '../components/Ourmission1.js';
import Ourteam from '../components/Ourteam.js';
import Aboutyear from '../components/Aboutyear.js';


const About = () => {
  return (
    <div><NavbarWhite/>
      <Banner title="Home / about"heading="Who We Are" paragraph="Thara Group is a global trade expert and a prominent super stockist, importer, and exporter based in Kerala, India. With an extensive PAN India network and streamlined supply chains, we have emerged as a leading player in the FMCG industry." selectedCase="case7"/>
     <Misson1/>
     <Routes>
      </Routes>
      <Ourteam/>
      <Aboutyear/>
      <ConnectUs/>
      <Footer/>
    </div>
  )
}

export default About