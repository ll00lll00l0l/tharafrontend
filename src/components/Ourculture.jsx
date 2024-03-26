import React from 'react';
import { Link} from "react-router-dom";

import Ourcultphoto from '../assets/img/ourculture.png';
import styled from 'styled-components';

  const Outdiv = styled.div`
  background: var(--BG-g1, linear-gradient(283deg, #B048FF -174.56%, rgba(145, 0, 255, 0.00) 109.23%));
  justify-content:space-between;
  
 `
const Innerdiv = styled.div`
display: flex;
padding: 90px 70px;
flex-direction: column;
align-items: flex-start;
gap: 70px;
margin-bottom:-40px;


h2 {
  color: #151515;
  font-family: Sora;
  font-size:clamp(30px,4vw, 50px);
  font-style: normal;
  font-weight: 600;
  line-height: 38.4px;
  letter-spacing: 0.5px;
}

p {
  color: #151515;
  font-family: Manrope;
  font-size: clamp(14px,2.5vw,18px);
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.5px;
  text-wrap:wrap;
}

@media screen and (max-width: 768px) {
  padding: 10px 20px;
  margin-bottom:30px;

  gap:10px;

}
`;
const Divvv = styled.div`
display: flex;
justify-content:space-between;

`
const IMGdiv = styled.div`
/* img-fluid{
  display: 'block';
    width: '100%';
    height: 'auto';
} */
`
const Ourculture = () => {
  return (
    <Outdiv className="container-fluid">
      <Divvv className='row '>
        <Innerdiv className='col-md-6'>
          <h2 className='text-dark font-weight-bold'>Our Culture</h2>
          <p className=''>
          We offer a competitive salary and benefits package, as well as opportunities
           for training and development.
           We are also committed to diversity and inclusion, 
          and we believe that our diverse team is one of our greatest strengths.
          </p>
          <div className="arrow-container">
          <Link to='/'>

                    <button className="btn-white" id="hide">View more
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
        </Innerdiv>
        <IMGdiv className='col-md-6'>
          <img src={Ourcultphoto} alt='' className=' container-fluid' />
        </IMGdiv>
      </Divvv>
    </Outdiv>
  );
};

export default Ourculture;
