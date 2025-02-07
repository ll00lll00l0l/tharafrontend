import React from "react";
import styled from "styled-components";
import compimg from "../assets/img/aboutcompimg.png";
import { Link } from "react-router-dom";

const BorderDiv = styled.div`
  padding: 0px 70px;

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const ResponsiveHeading = styled.h1`
  color: #151515;
  font-family: "Sora", sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutSection = styled.section`
  color: #151515;
  font-family: "Manrope";
  font-size: 1.2rem;
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
  flex-wrap: wrap-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  padding-top: 2rem;
  overflow-wrap: break-word;
`;
const Aboutcomp = () => {
  return (
    <BorderDiv>
      <ResponsiveHeading>About Us</ResponsiveHeading>
      <AboutSection>
        <Div className="row flex-wrap-reverse  g-4">
          <InnerDiv className="col-md-6">
            A Pan-India Network Connecting Businesses and Consumers Directly
            Thara Group's extensive PAN-India network isn't just about
            distribution; it's about building a vibrant business ecosystem. By
            streamlining the supply chain, we cut out unnecessary layers,
            fostering professionalism, competitiveness, and fairness for all.
            Our thriving e-commerce marketplace amplifies this impact, offering
            a prosperous platform for retail and wholesale purchases at
            affordable prices, directly connecting businesses and customers
            without any middlemen.
            <div className="arrow-container">
              <Link to="/about">
                <button className="btn-white">
                  Read More
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
          </InnerDiv>
          <div className="col-md-6 py-4">
            <ImageContainer>
              <Image src={compimg} alt="" />
            </ImageContainer>
          </div>
        </Div>
      </AboutSection>
    </BorderDiv>
  );
};

export default Aboutcomp;
