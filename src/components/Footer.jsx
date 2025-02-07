import React from 'react';
import styled from 'styled-components';
import tharalogo from '../assets/img/Group 4.svg';
import phoneIcon from '../assets/img/phone-vibrate-fill.png';
import emailIcon from '../assets/img/entypo_email.png';
import insta from '../assets/img/insta.png';
import facebook from '../assets/img/facebook.png';
import youtube from '../assets/img/youtube.png';
import { Link } from 'react-router-dom';


const FooterWrapper = styled.footer`
  padding: 100px 20px 0px 0px;
  background-color: #450079;
  color: #fff;
  position: relative;
  @media (max-width: 1040px) {
    padding: 70px 10px 0;
  }
`;

const FooterBody = styled.div`
  width: 100%;
  padding: 30px 0 0px 70px;
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media (max-width: 1040px) {
    padding: 30px 0 0px 10px;
  }
`;

const FrameWork = styled.div`
  padding-bottom: 70px;
  @media (max-width: 1040px) {
    padding-bottom:20px;
  }
`;

const LogoImage = styled.img`
  width: 150px; 
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`;

const Col = styled.div`
  flex: 1;
  gap:34px;
  margin-right: 20px;
  P{
    padding:34px 120px 0 0;
    color: #FFF;
    font-size: clamp(15px,2.5vw,18px);
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 0.5px;
    white-space: balance;
    font-family: Manrope;
  }
  @media (max-width: 768px) {
    p {
      padding: 10px; 
    }
  }
`;

const QuickLinks = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  
  h5 {
    margin-bottom: 24px;
   
  }

  a {
    color: #fff;
    text-decoration: none;
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    white-space: balance;

  }
`;

const ContactInfo = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  h5 {
    margin-bottom: 24px;
  }

  span {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    a {
      color: #fff;
      text-decoration: none;
      margin-left: 10px;
      font-size: 16px;
    }
  }
`;

const ContactIcon = styled.img`
  margin-right: 10px;
`;

const ContentCol = styled.div`
  p {
    font-size: 16px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
`;

const Attribution = styled.div`
  display: flex;
  justify-content:space-between;
  p {
    color: #B57BE1;
    font-family: Manrope;
    font-size: clamp(0.75rem, 1.3vw, 1rem); 
    font-style: normal;
    font-weight: 400;
    line-height: 1.2; 
    letter-spacing: 0.5px;
    white-space: nowrap;
  }
`;


function Footer() {
  return (
    <FooterWrapper>
      <FooterBody>
        <FrameWork>
          <Row>
            <Col>
              <LogoImage src={tharalogo} alt="Thara Logo" />
              <p>SREE COMPLEX, CALICUT ROAD,PERINTHALMANNA,MALAPPURAM, KERALA, 679322</p>
            </Col>
            <Col>
              <QuickLinks>
                <h5>Quick Links</h5>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/Product">Product</Link>
                <Link to="/Career">Career</Link>
                <Link to="/Contact">Contact Us</Link>
              </QuickLinks>
            </Col>
            <Col>
              <ContactInfo>
                <h5>Contact Us</h5>
                <span>
                  <ContactIcon src={emailIcon} alt="Email" />
                  <Link to="mailto:support@thara.co.in">support@thara.co.in</Link>
                </span>
                <span>
                  <ContactIcon src={phoneIcon} alt="Phone" />
                  <Link to="tel:+919447025701">+91 9447025701</Link>
                </span>
              </ContactInfo>
            </Col>
            <Col>
              <ContentCol>
                <SocialIcons>
                  <Link to=""><ContactIcon src={facebook} alt="Facebook" /></Link>
                  <Link to="https://www.instagram.com/tharagroupsince1987"><ContactIcon src={insta} alt="Instagram" /></Link>
                  <Link to=""><ContactIcon src={youtube} alt="YouTube" /></Link>
                </SocialIcons>
              </ContentCol>
            </Col>
          </Row>
        </FrameWork>
        <Attribution>
          <p>C© 2023 Thara & Co</p>
          <p>Created By Nabeel Hassan</p>
        </Attribution>
      </FooterBody>
    </FooterWrapper>
  );
}

export default Footer;
