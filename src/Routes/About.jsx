import React from 'react'
import {  Routes } from 'react-router-dom';
import  NavbarWhite  from'../components/NavbarWhite';
import ConnectUs from '../components/ConnectUs';
import Footer from '../components/Footer';
import Banner from '../components/Bannerabout';
import Misson1 from '../components/Ourmission1';
import Ourteam from '../components/Ourteam';
import Aboutyear from '../components/Aboutyear';


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