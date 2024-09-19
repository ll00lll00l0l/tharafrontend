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
    <>
      <Navbar1/>
      <BannerImg/>
      <AboutUs/> 
      <Homecomp/>
      <Marquee/>
      <Aboutcomp/>
      <ConnectUs/>
      <Footer/>
    </>
  )
};

export default Home;