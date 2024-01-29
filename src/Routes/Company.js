import React from 'react'
import { Route, Routes } from 'react-router-dom';
import  NavbarWhite  from'../components/NavbarWhite.js';
import CompanyList from '../components/CompanyList';
import ConnectUs from '../components/ConnectUs.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Bannerabout.js';


const About = () => {
  return (
    <div><NavbarWhite/>
      <Banner title="Home / about"heading="Our Companies" selectedCase="case9" paragraph="A trusted conglomerate with 10+ companies under its umbrella, offering a wide range of high-quality products and services across industries, from wholesale distribution to fashion to real estate, making your life easier and more enjoyable." />
     <Routes>
        <Route path="/" element={<CompanyList />} />
      </Routes>
      <ConnectUs/>
      <Footer/>
    </div>
  )
}

export default About