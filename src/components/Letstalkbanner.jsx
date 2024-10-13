import React from 'react';
import Bann from '../assets/img/letsbanner.webp';
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
  top: 40%;
  left: 4%;
  color: white;
  font-size: 2em;

  @media (max-width: 768px) {
    top: 30%;
    left: 5%;
  }
`;

const Heading = styled.section`
  margin: 0;
`;

const P = styled.p`
  color: #8f8f8f;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.5px;
`;

const H1 = styled.h1`
  color: #fff;
  font-family: Sora;
  font-size: clamp(40px,4.5vw,60px);
  font-style: normal;
  font-weight: 600;
  line-height: 38.4px;
  letter-spacing: 0.5px;
`;

const Letstalkbanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={Bann} alt="" />
      <OverlayText>
        <Heading>
          <P>Home / Contact</P>
          <H1>Let’s Talk</H1>
        </Heading>
      </OverlayText>
    </BannerContainer>
  );
};

export default Letstalkbanner;
