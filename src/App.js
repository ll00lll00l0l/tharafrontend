import React  from "react";
import {  Route, Routes } from 'react-router-dom';
import "./index.css";
import Home from "./Routes/Home";
import Product from "./Routes/Product";
import About from "./Routes/About";
import Brand from "./Routes/Brands";
import Company from "./Routes/Company";
import Career from "./Routes/Career";
import Contact from "./Routes/Contact";
import ProductData from "./Routes/ProductData";





function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/brand" element={<Brand/>}/>
      <Route path="/company" element={<Company/>}/>
      <Route path="/Product/:id/" element={<ProductData />} />
      <Route path="/Career" element={<Career/>}/>
      <Route path="/Contact" element={<Contact/>}/>



    </Routes>

    </>
  );
}

export default App;
