import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavbarWhite from '../components/NavbarWhite';
import CVform from '../components/CVform';
  import Footer from '../components/Footer.js';
import Careeerbanner from '../components/Careeerbanner.js';
import Ourculture from '../components/Ourculture.js';
  import Missionvison from '../components/Missionvison.js';


const Career = () => {
  return (
    <> <NavbarWhite />
    <Careeerbanner/>
    <Missionvison/>
    <Ourculture/>
    <Routes>
        <Route path="/" element={<CVform />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default Career