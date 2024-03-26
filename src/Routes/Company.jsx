import React from 'react'
import { Route, Routes } from 'react-router-dom';
import  NavbarWhite  from'../components/NavbarWhite';
import CompanyList from '../components/CompanyList';
import ConnectUs from '../components/ConnectUs';
import Footer from '../components/Footer';
import Banner from '../components/Bannerabout';


const About = () => {
  return (
    <div><NavbarWhite/>
      <Banner title="Home / about"heading="Our Companies" selectedCase="case7" paragraph="A trusted conglomerate with 10+ companies under its umbrella, offering a wide range of high-quality products and services across industries, from wholesale distribution to fashion to real estate, making your life easier and more enjoyable." />
     <Routes>
        <Route path="/" element={<CompanyList />} />
      </Routes>
      <ConnectUs/>
      <Footer/>
    </div>
  )
}

export default About