import React from 'react';
import  Navbar1  from'../components/Navbar.js';
import  BannerImg  from'../components/BannerImg.js';
import AboutUs from '../components/AboutUs.js';
import ConnectUs from '../components/ConnectUs.js';
import Footer from '../components/Footer.js';
import Aboutcomp from '../components/Aboutcomp.js';
import Marquee from '../components/Marquee.js';
import Homecomp from '../components/Homecomp.js';

const Home = () => {
  return (
    <div>
      <Navbar1/>
      <BannerImg/>
      <AboutUs/> 
      <Homecomp/>
      <Marquee/>
      <Aboutcomp/>
      <ConnectUs/>
      <Footer/>
    </div>
  )
};

export default Home;