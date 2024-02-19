import React from 'react';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SVG  from './Allsvgcomp.js'; 

function AboutUs() {
  return (
    <div className=' contain'>
      <div className='row' >
        <div className='col-md-6 py-4'>
          <div className=''>
            <div className=' flex-item1'>
              <div className='grid-item1 '>
                <div className='grid-child'>
                  <div className='image-container'>
             <SVG className='imgsvg' caseValue='case11' />

                  <div className='svg-container'>
                    <SVG className='imgsvg' caseValue='case10' />
                     </div></div>
                    <div className='textcontent'><span>40 Years</span>
                    <p>of Successful Trading</p></div>
                </div>
                <div className='grid-child'>
                  <div className='image-container'>
             <SVG className='imgsvg' caseValue='case11' />

                  <div className='svg-container'>
                    <SVG className='imgsvg' caseValue='case10' />
                     </div></div>
                    <div className='textcontent'><span>05+</span>
                    <p>Thara Companies</p></div>
                </div>
                <div className='grid-child2'>
                  <div className='image-container'>
             <SVG className='imgsvg' caseValue='case11' />

                  <div className='svg-container'>
                    <SVG className='imgsvg' caseValue='case10' />
                     </div></div>
                    <div className='textcontent'><span>More than 20</span>
                    <p>International Brands are collaborated with Us</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-6 '>
          <div className='grid-item2'>
            <span>Join our Global Network</span>
           
            <p>
              We span the globe, connecting people and cultures through our work. Join us in
              collaboration and create something truly extraordinary.
            </p>
            <div className='arrow-container'>
              <button className='btn-purple'>
                Let’s Talk
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='31'
                  height='31'
                  viewBox='0 0 31 31'
                  fill='none'
                  className='arrow'
                >
                  <path
                    d='M17.4016 8L24.6932 15.5M24.6932 15.5L17.4016 23M24.6932 15.5L7.19324 15.5'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
