import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarWhite from '../components/NavbarWhite';
import ProductList from '../components/ProductList';
import ConnectUs from '../components/ConnectUs.js';
import Footer from '../components/Footer.js';
import Banner from '../components/Bannerabout.js';

const Product = () => {
  
  return (
    <>
      <NavbarWhite />
      <Banner title="Home / Product" heading="Products" hideButton={true} selectedCase="case7" />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
      <ConnectUs/>
      <Footer/>
    </>
  );
};

export default Product;
