import React from 'react';
import styled from 'styled-components';
import Group from './Allsvgcomp.js';

const ResponsiveHeading = styled.h1`
  color: #151515;
  font-family: Sora;
  font-size: clamp(30px, 3vw, 50px);
  font-style: normal;
  font-weight: 600;
  line-height: 38.4px; /* 76.8% */
  letter-spacing: 0.5px;
`;

const Divoutter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 90px 70px;
  gap: 70px;
  background: var(--BG-g1, linear-gradient(283deg, #b048ff -174.56%, rgba(145, 0, 255, 0.00) 109.23%));
  @media (max-width: 1040px) {
    padding: 80px 20px;
    gap: 30px;
  }
`;

const AboutSection = styled.section`
  color: #151515;
  font-family: sans-serif;
  font-size: clamp(12px, 1vw, 18px);
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.5px;
  white-space: pre-wrap;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sdiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 27px;

  & > *:not(span) {
    background-color: #fff;
    border-radius: 9.756px;
  }

  .item1 {
    grid-row: 1;
    grid-column: 1;
  }
  .item2 {
    grid-row: 1;
    grid-column: 2;
  }
  .item3 {
    grid-row: 1;
    grid-column: 3;
  }
  .item4 {
    justify-self: center;
    grid-row: 2;
    grid-column: 1 / span 2;
  }
  .item5 {
    justify-self: center;
    grid-row: 2;
    grid-column: 2 / span 3;
  }
  .item6 {
    justify-self: center;
    grid-row: 3;
    grid-column: 2;
  }

  @media (max-width: 1040px) {
    display: flex;
  flex-wrap: nowrap;
  width: 75vw;
  overflow-x: auto;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
  scroll-snap-type: inline mandatory; /* Enable horizontal snap */
}

.item {
  scroll-snap-align: start; /* Snap each item to the start */
}
    &::-webkit-scrollbar {
    display: none;
    width:0;
  }
  }
`;

const Conbrod = styled.div`
  position: relative;
  width: 182.439px;
  height: 60px;
  border-radius: 9.756px;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  overflow: hidden;

  background: radial-gradient(circle at 0% 0%, #450079 50%, transparent 50%);
  background-position: 100% 50%;
  background-size: 400% 400%;
  transition: background 600ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    background-position: 0;

    svg path {
      fill: #fff;
      transition: fill 0.5s;
    }
    .fillcolr {
      background-position: 0;
      fill: #450079;
      transition: fill 0.5s;
    }
  }
`;

const GroupStyle = styled.div`
  width: auto;
  height: 20.143px;
  flex-shrink: 0;
  background-color: white;
  &Conbrod:hover svg path {
    fill: white;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 47px;
`;

function Homecomp() {
  return (
    <Divoutter>
      <ResponsiveHeading>Our Companies</ResponsiveHeading>

      <AboutSection>
        <div className='row'>
          <InnerDiv className='col-md-6'>
            A trusted conglomerate with 10+ companies under its umbrella, offering a wide range of high-quality products and services across industries, from wholesale distribution to fashion to real estate, making your life easier and more enjoyable.
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
          </InnerDiv>

          <ImageContainer className='col-md-6'>
            <Sdiv>
              <div className='item1'>
                <Conbrod>
                  <Group style={GroupStyle} caseValue="case1" />
                </Conbrod>
              </div>
              <div className='item2'>
                <Conbrod>
                  <Group style={GroupStyle} caseValue="case2" />
                </Conbrod>
              </div>
              <div className='item3'>
                <Conbrod>
                  <Group style={GroupStyle} caseValue="case1" />
                </Conbrod>
              </div>
              <div className='item4'>
                <Conbrod>
                  <Group style={GroupStyle} caseValue="case1" />
                </Conbrod>
              </div>
              <div className='item5'>
                <Conbrod>
                  <Group style={GroupStyle} caseValue="case2" />
                </Conbrod>
              </div>
              <span className='item6'>
                & more
              </span>
            </Sdiv>
          </ImageContainer>
        </div>
      </AboutSection>
    </Divoutter>
  );
}

export default Homecomp;
