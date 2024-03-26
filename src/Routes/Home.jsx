import React from 'react';
import  Navbar1  from'../components/Navbar';
import  BannerImg  from'../components/BannerImg';
import AboutUs from '../components/AboutUs';
import ConnectUs from '../components/ConnectUs';
import Footer from '../components/Footer';
import Aboutcomp from '../components/Aboutcomp';
import Marquee from '../components/Marquee';
import Homecomp from '../components/Homecomp';

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