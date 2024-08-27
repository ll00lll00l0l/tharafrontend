import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image1 from '../assets/img/image1.png';
import Image2 from '../assets/img/image2.png';
import Image3 from '../assets/img/image3.png';
import Image4 from '../assets/img/image4.png';
import Image5 from '../assets/img/image5.png';
import Image6 from '../assets/img/image6.png';
import '../styles/Marqueestyle.css';

const BorderDiv = styled.div`
  padding: 140.214px 70px;

  @media (max-width: 768px) {
    padding: 70px 20px; 
  }
`;

const Marquee = () => {
  const [marqueePosition, setMarqueePosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarqueePosition((prevPosition) => (prevPosition + 0) % 100);
    }, 1000); 
  
    return () => clearInterval(interval);
  }, []);

  return (
    <BorderDiv>
      <div className='home_brand_collab'>
        <span>Our Brands & Collaborations</span>
        <div className=" row flex-wrap-reverse ">
          <div className="col-md-6">
           <div className='marqgridcol1' > We as a group, sell more than <b>20+ products across India.</b> 
            Our most famous products are Indomie Noodles,
            ZPC Creme Fudge, Edhwi, and many more.
            Explore our catalogue.</div>
            <div className="arrow-container">
              <Link to="/brand">
                <button className="btn-white">
                  View More
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
              </Link>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='marquee'>
              <div className="track" style={{ transform: `translateX(-${marqueePosition * 100}%)` }}>
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
                <img src={Image5} alt="" />
                <img src={Image6} alt="" />
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
                <img src={Image5} alt="" />
                <img src={Image6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BorderDiv>
  );
};

export default Marquee;