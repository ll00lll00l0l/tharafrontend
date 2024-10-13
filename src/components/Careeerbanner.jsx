import React from 'react';
import Bann from '../assets/img/carrerbanner.webp';  
import styled from 'styled-components';


const BannerContainer = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const OverlayText = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  top: 10%;
  left: 5%;
  color: white;
  font-size: 2em;


`;

const Heading = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const P = styled.p`
  color: #8f8f8f;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.5px;
  margin-bottom:40px;
`;

const H1 = styled.h1`
  color: #fff;
  font-family: Sora;
  font-size: clamp(30px,6vw,60px);
  font-style: normal;
  font-weight: 600;
  line-height: 38.4px;
  letter-spacing: 0.5px;
  @media (max-width: 768px) {

 
  }
`;
const Headingmain = styled.section`
 margin-bottom :72px;
 @media (max-width: 768px) {
    margin-bottom :auto;
 
  }

`
const Gheading= styled.h2`
color: #FFF;
font-family: Manrope;
font-size: clamp(14px,3vw,32px);
font-style: normal;
font-weight: 400;
width: 432.469px;
line-height: 160%; /* 51.2px */
margin-bottom:17px;
white-space: balance;

@media (max-width: 768px) {
  display:none; 
 
  }  
`
const Gparh = styled.p`
color: #FFF;
font-family: Manrope;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 28.8px */
width: 631.444px;
letter-spacing: 0.5px;
overflow-wrap: break-word;
@media (max-width: 1040px) {
display:none; 
  } 
`
      function Careeerbanner() {
          return (
              <BannerContainer>
                <BannerImage src={Bann} alt="" />
                <OverlayText>
                  <Heading>
                    <P>Home / Career</P>
                    <Headingmain><H1>Careers at Thara</H1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="304" height="31" viewBox="0 0 304 31" fill="none">
  <path d="M0.227761 4.60661C90.2473 -1.83915 269.424 7.91985 302.024 6.03676C306.494 5.7786 80.2473 9.57915 70.0832 29.5973" stroke="white" strokeWidth="3"/>
</svg></Headingmain>
                  
                  <Gheading>
                  Join a Team of Innovators & Excellence at Thara Group

                  </Gheading>

                  <Gparh>We are a diversified conglomerate with over 35 years of experience, offering a wide range of products and services across industries. We are looking for talented and passionate
                     individuals to join our team.</Gparh></Heading>
                </OverlayText>
              </BannerContainer>
            );
          };
          
              

export default Careeerbanner;