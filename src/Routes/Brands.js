import React from 'react'
import { Route, Routes } from 'react-router-dom';
import  NavbarWhite  from'../components/NavbarWhite.js';
import Brand from '../components/BrandList';
import ConnectUs from '../components/ConnectUs.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Bannerabout.js';

const About = () => {
  return (
    <div><NavbarWhite/>
          <Banner title="Home /About " selectedCase="case9" heading="Our Brands & Collaborations" paragraph="We as group, sell more than 20+ products across India. Our most famous products are Indomie Noodles, ZPC Creme Fudge, Edhwi and many more. Explore our catalogue." />

     <Routes>
        <Route path="/" element={<Brand />} />
      </Routes>
      <ConnectUs/>
      <Footer/>
    </div>
  )
}

export default About