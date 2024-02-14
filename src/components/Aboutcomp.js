import React from 'react';
import styled from 'styled-components';
import compimg from '../assets/img/aboutcompimg.png';
import { Link } from 'react-router-dom';

// Styled components
const BorderDiv = styled.div`
  padding: 0px 70px;
 

  @media (max-width: 768px) {
    padding: 0px 20px; 
  }
`;
const ResponsiveHeading = styled.h1`
  color: #151515;
  font-family: 'Sora', sans-serif;
  font-size: 2.5rem; /* Adjust the font size for smaller screens */
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const AboutSection = styled.section`
  color: #151515;
  font-family: 'Manrope';
  font-size: 1.2rem; /* Adjust the font size for smaller screens */
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Div = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top:10px;
  }
`;

const ImageContainer = styled.div`
  /* Add styling for the image container */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
`;

const Image = styled.img`
  /* Add styling for the image */
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* Adjust as needed: 'cover', 'contain', 'fill', etc. */
`;
const InnerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 50px;
text-wrap: balance;
`

const Aboutcomp = () => {
  return (
    <BorderDiv>
      <ResponsiveHeading>About Us</ResponsiveHeading>
      <AboutSection>
        <Div className='row'>
          <InnerDiv className='col-md-6'>
            Thara Trading Company, established in 1987, is a leading distributor and importer/exporter of fast-moving consumer goods,
            including confections, biscuits, chocolates, and instant noodles. We trade in domestic and foreign markets,
            and are committed to providing our customers with the highest quality products and services.
            <div className="arrow-container">
              <Link to='/about'>
        <button className="btn-white">Read More
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
      </button></Link>
    </div>
          </InnerDiv>
          <div className='col-md-6 py-4'>
            <ImageContainer>
              <Image src={compimg} alt='' />
            </ImageContainer>
          </div>
        </Div>
      </AboutSection>
    </BorderDiv>
  );
};

export default Aboutcomp;
