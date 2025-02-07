import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarWhite from "../components/NavbarWhite";
import ContactForm from "../components/ContactForm";
import Ourhq from "../components/Ourhq";
import Footer from "../components/Footer";
import Banner from "../components/Letstalkbanner";

const Contact = () => {
  return (
    <>
      <NavbarWhite />
      <Banner />
      <Routes>
        <Route path="/" element={<ContactForm />} />
      </Routes>
      <Ourhq />
      <Footer />
    </>
  );
};

export default Contact;
