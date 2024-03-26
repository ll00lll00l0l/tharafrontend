import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavbarWhite from '../components/NavbarWhite';
import CVform from '../components/CVform';
  import Footer from '../components/Footer';
import Careeerbanner from '../components/Careeerbanner';
import Ourculture from '../components/Ourculture';
  import Missionvison from '../components/Missionvison';


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