import React from 'react'
import "../styles/BannerImgStyle.css";
import { Link } from "react-router-dom";

import banner from '../assets/img/banner.png';
import Ellipse from '../assets/img/Ellipse 2.png';
import 'bootstrap/dist/css/bootstrap.min.css';






function BannerImg() {
    return (
      <>
      <div className=''>
      <div className='ban'>
      <div className='banner  '>  
      <div className="banner-info">
        <span >Your Desires </span>
        <span>Our Endeavours</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="309" height="21" viewBox="0 0 309 21" fill="none">
         <path d="M1.00348 4.14711C91.023 -2.29866 274.675 5.5266 307.275 3.64351C311.744 3.38536 92.2367 0.0132731 82.0725 20.0314" stroke="#B859FF" strokeWidth="3"/>
        </svg>

<p>Thara is a leading FMCG distributor and importer/exporter with over 40 years of experience.
   We specialize in fast-moving consumer goods,
   including confectioners, biscuits, chocolates, and instant noodles.</p>
  
        
        <div className="arrow-container">
        <Link to='/Contact#letstalk'>
        <button className="btn-white">Let’s Talk
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        className="arrow"
      >
        <path
          d="M16.4583 8.14621L23.75 15.6462M23.75 15.6462L16.4583 23.1462M23.75 15.6462L6.25 15.6462"
          stroke="#450079"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      </button>
      </Link >
    </div>
       
     
      </div>
      </div>
      

      
      <div className='banner-container '>
          <div className='banner-image-container'>
            <img className='banner-image img-fluid' src={banner} alt='img' />
            <img className='Ellipse-image img-fluid ' src={Ellipse} alt='img' />
            <div className='banner-shadow'></div>
          
    </div>
    </div>
    </div>
    </div>
    </>
  )
}




export default BannerImg;
