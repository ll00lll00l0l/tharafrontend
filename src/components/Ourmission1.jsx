import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Misvis from "../assets/img/missvis.png";
import SVG from "./Allsvgcomp.js";

const GlobalStyle = createGlobalStyle`
  body {
  }
`;

const BrodDiv = styled.div`
  display: flex;
  padding: 81px 70px;

  @media (max-width: 768px) {
    padding: 81px 20px;
  }
`;

const Outdivv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    color: #151515;
    font-family: Sora;
    font-size: clamp(40px, 5vw, 50px);
    font-style: normal;
    font-weight: 600;
    line-height: 38.4px;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.375rem;

  p {
    display: flex;
    width: 100%;
    max-width: 565.443px;
    flex-direction: column;
    justify-content: center;
    color: #151515;
    font-family: Manrope;
    font-size: clamp(18px, 4vw, 32px);
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Div2 = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  margin-top: 4.375rem;

  p {
    color: #151515;
    font-family: Manrope;
    font-size: clamp(14px, 3vw, 18px);
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 0.5px;
    text-wrap: balance;
  }

  @media (max-width: 1040px) {
    align-items: center;
    margin-top: 1.375rem;

    gap: 20px;
  }
`;

const Broddiv2 = styled.div`
  display: flex;
  padding: 90px;

  @media (max-width: 1040px) {
    padding: 2px 2px;
  }
`;

const Indiv = styled.div`
  display: flex;
  gap: 40px;
  img {
    height: 235.083px;
  }
  @media (max-width: 1040px) {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const Divder = styled.div`
  padding: 30px 30px;
  border-radius: 20px;
  border: 1px solid #aeaeae;
  width: 344px;
  height: 237px;
  flex-shrink: 1;
  color: #fff;
  background: radial-gradient(circle at 0% 0%, #450079 50%, transparent 0%);
  background-position: 100% 50%;
  background-size: 400% 400%;
  transition: background 1000ms ease-in-out, color 800ms ease-in-out;
  &:hover {
    background-position: 0% 0%;
    color: #fff;
  }

  .grid-childmission span {
    font-family: Manrope;
    font-size: clamp(40px, 3vw, 48px);
    font-style: normal;
    font-weight: 700;
    line-height: 123%; /* 59.04px */
    letter-spacing: -1.44px;
    text-transform: capitalize;
    color: #1b1b1b;
  }
  &:hover span,
  &:hover p {
    color: #fff;
  }
  &:hover svg circle {
    fill: #261549;
  }
  &:hover svg path {
    stroke: #fff;
  }
  div {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
  }

  /* span {
    color: #1b1b1b;
    font-family: Manrope;
    font-size: clamp(12px,.5vw,18px);
    font-style: normal;
    font-weight: 700;
    line-height: 123%;
    letter-spacing: -0.2px;
    text-transform: capitalize;
  } */

  p {
    color: #2f2f2f;
    font-family: Manrope;
    font-size: clamp(20px, 1.5vw, 24px);
    font-style: normal;
    font-weight: 400;
    line-height: 123%;
    text-transform: capitalize;
    text-wrap: balance;
  }
`;

const Ourmission1 = () => {
  return (
    <>
      <GlobalStyle />
      <BrodDiv className=" ">
        <Outdivv className="row">
          <h1>Our Mission & Vision </h1>
          <Div1 className="col-md-6">
            <p>
              We are committed to delivering high-quality products and
              innovative solutions to customers worldwide.
            </p>
          </Div1>
          <Div2 className="col-md-6">
            <p>
              At Thara Group, our mission is to be a leading global trade
              expert, committed to delivering high-quality products to customers
              worldwide.
            </p>
            <p>
              Our vision is to be the preferred choice for consumers seeking
              quality products, utilizing innovation, ethical practices, and a
              customer-centric approach.
            </p>
          </Div2>
        </Outdivv>
      </BrodDiv>
      <Broddiv2>
        <Indiv>
          <div className="">
            <img src={Misvis} alt="" className="img-fluid" />
          </div>
          <Divder>
            <div className=" grid-childmission">
              <div className="image-container">
                <SVG className="imgsvg" caseValue="case11" />
                <div className="svg-container">
                  <SVG className="imgsvg" caseValue="case10" />
                </div>
              </div>
              <div className="textcontent">
                <span>10+</span>
                <p>Companies In Thara</p>
              </div>
            </div>
          </Divder>
          <Divder>
            <div className="grid-childmission">
              <div className="image-container">
                <SVG className="imgsvg" caseValue="case11" />
                <div className="svg-container">
                  <SVG className="imgsvg" caseValue="case10" />
                </div>
              </div>
              <div className="textcontent">
                <span>40 Years</span>
                <p>of Successful Trading</p>
              </div>
            </div>
          </Divder>
        </Indiv>
      </Broddiv2>
    </>
  );
};

export default Ourmission1;
