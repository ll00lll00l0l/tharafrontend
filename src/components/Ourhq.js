import React from 'react';
import Ourhqphoto from '../assets/img/Ourhq.png';
import styled from 'styled-components';

  const Outdiv = styled.div`
  background: var(--BG-g1, linear-gradient(283deg, #B048FF -174.56%, rgba(145, 0, 255, 0.00) 109.23%));
  
 `
const Innerdiv = styled.div`
display: flex;
padding: 90px 70px;
flex-direction: column;
align-items: flex-start;
gap: 70px;


h2 {
  color: #151515;
  font-family: Sora;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 38.4px;
  letter-spacing: 0.5px;
  text-wrap: balance;

}

p {
  color: #151515;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0.5px;
  text-wrap: balance;
}

@media screen and (max-width: 768px) {
  padding: 10px 20px;

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 16px;
  }
}
`;
const Div = styled.div`
display: flex;
`
const IMGdiv = styled.div`
@media screen and (max-width: 1040px) {
 img{
  display:none;
 }
}
`
const Ourhq = () => {
  return (
    <Outdiv className="container-fluid">
      <Div className='row '>
        <Innerdiv className='col-6'>
          <h2 className=''>Our HQ</h2>
          <p>
            Thara Trading CoSree Complex,
            Near HDFC Bank Calicut Road,
            Perinthalmanna,Malappuram
            Dt,Kerala,India - 679322
          </p>
        </Innerdiv>
        <IMGdiv className='col-6'>
          <img src={Ourhqphoto} alt='' className='img-fluid' />
        </IMGdiv>
      </Div>
    </Outdiv>
  );
};

export default Ourhq;
