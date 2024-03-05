import React from 'react';
import styled from 'styled-components';
import Star  from './Allsvgcomp.js'; 
import { Link } from 'react-router-dom';


  const BorderDiv = styled.div`
  padding: 140.214px 70px;
 

  @media (max-width: 1040px) {
    padding: 70px 20px; 
  }
`;

const AlignmentDiv = styled.div`
  display: flex;
  padding: 56px 184px;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  flex-wrap:wrap;
  background: linear-gradient(90deg, #CD8BFF -54.61%, rgba(255, 255, 255, 0.00) 169.53%);

  @media (max-width: 1200px) {
    padding: 56px 20px; 
    gap:20px;   
    justify-content: center;

  }
`;

const InnerDiv = styled.div`
  justify-content: center;
  align-items: center;
  gap: 16px;
 
`;
  const InnerDiv2 = styled.div`
     @media (max-width: 768px) {
    display:grid;
    align-items: center; 
  }
  `;

const Paragraph = styled.p`
  color: #151515;
  font-family: Sora;
  font-size: clamp(27px,3.4vw,40px);
  font-style: normal;
  font-weight: 600;
  line-height: 38.4px; /* 96% */
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
  
  }
`;

export default function ConnectUs() {
  return (
    <BorderDiv>
      <AlignmentDiv>
        <InnerDiv>
          <Paragraph>Connect with Us</Paragraph>
          <Star className='imgsvg' caseValue='case8' />

        </InnerDiv>
    
        <InnerDiv2>
          <div className="arrow-container">
          <Link to='/Contact'>
          <button className="btn-purple">
            Let’s Talk
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" className='arrow'>
              <path d="M17.4016 8L24.6932 15.5M24.6932 15.5L17.4016 23M24.6932 15.5L7.19324 15.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button></Link>
        </div>
        </InnerDiv2>
      </AlignmentDiv>
    </BorderDiv>
  );
}
