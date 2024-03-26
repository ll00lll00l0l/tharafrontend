import React from 'react';
import '../styles/Missionstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SVG  from './Allsvgcomp.js'; 



function Missionvison() {
  return (
    <div className='container-fluid mcontain'>
      <div className=' row' >
      <div className='col-md-6'>
          <div className='mgrid-item2'>
           
            <span>Our Mission & Vision</span>
            <p>
            At Thara Group, we are guided by a set of core values that shape our culture and define our success.
            </p>
           
          </div>
        </div>
        <div className='col-md-6 '>
          <div className='gapoo'>
            <div className='mgrid-container'>
              <div className='mgrid-item1 '>
                <div className='mgrid-child '>
                  <div className='mimage-container'>
                   <SVG className='imgsvg' caseValue='case11' />

                  <div className='msvg-container'>
                  <SVG className='imgsvg' caseValue='case10' />
                     </div></div>
                    <span>Innovation</span>
                   
                </div>
                <div className='mgrid-child '>
                  <div className='mimage-container'>
                   <SVG className='imgsvg' caseValue='case11' />

                  <div className='msvg-container'>
                  <SVG className='imgsvg' caseValue='case10' />
                     </div></div>
                    <span>Excellence</span>
                </div>
                <div className='mgrid-child '>
                  <div className='mimage-container'>
                   <SVG className='imgsvg' caseValue='case11' />

                  <div className='msvg-container'>
                  <SVG className='imgsvg' caseValue='case10' />
                     </div></div>
                    <span>Integrity</span>
                </div>
                <div className='mgrid-child  '>
                  <div className='mimage-container'>
                   <SVG className='imgsvg' caseValue='case11' />

                  <div className='msvg-container'>
                  <SVG className='imgsvg' caseValue='case10' />
                     </div></div>
                    <span>goodwill</span>
                   
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Missionvison;
