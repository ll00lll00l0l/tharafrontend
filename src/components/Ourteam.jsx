import React from 'react'
import Team1 from '../assets/img/ourteam1.jpg';
import Team2 from '../assets/img/ourteam2.jpg';
import Team3 from '../assets/img/ourteam3.jpg';

import Coma  from './Allsvgcomp.js'; 
import  '../styles/Ourteam.css'; 


function ourteam() {
  return (
    <div className='teambroder'>
    <div className='teamrow row'>
        <div className='teamcol col-md-6'>
        <h1>Our Team</h1>
    
          <div>
          <img src={Team1} alt='' className='img-fuild' />
           <div><h5>Ummer Kongan</h5>
         <h6>Founder & Managing Director, Thara Group</h6></div>
          </div>
          <div>
          <img src={Team2} alt=''className='img-fuild'/>
          <div><h5>Nadeem Kongan</h5>
          <h6> Managing Director, Thara & Co CEO</h6></div>
          </div>
          <div>
          <img src={Team3} alt='' className='img-fuild'/>
          <div><h5>Naji Kongan</h5>
          <h6>Managing Director, Thara </h6></div>
          </div>
        </div>
        <div className='teamcol2 col-md-6'>
         <Coma  caseValue='case12'/>
          <p>“At Thara Group, we're passionate about delivering
             high-quality
             products and innovative solutions to our customers worldwide”</p>
             <h6>Ummer Kongan</h6>
             <span>Founder & Managing Director, Thara Group</span></div>
    </div>
    </div>
  )
}

export default ourteam