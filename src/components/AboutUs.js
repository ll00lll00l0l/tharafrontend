import React from 'react';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function AboutUs() {
  return (
    <div className=' contain'>
      <div className='row' >
        <div1 className='col-md-6 '>
          <div className=''>
            <div className=''>
              <div className='grid-item1 '>
                <div className='grid-child  col-sm-2'>
                  <div className='image-container'>
                  <svg  className='Ellipse-img'xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                   <circle cx="30.3408" cy="30.6431" r="29.665" fill="#EFEFEF"/>
                  </svg>
                  <div className='svg-container'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='42'
                      height='42'
                      viewBox='0 0 42 42'
                      fill='none'
                    >
                      <path
                        d='M4.8829 29.0784L14.0669 20.2476L21.9389 27.8169L37.6829 12.6784M37.6829 12.6784H25.8749M37.6829 12.6784V24.0322'
                        stroke='black'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                     </div></div>
                    <div><span>40 Years</span>
                    <p>of Successful Trading</p></div>
                </div>
                <div className='grid-child  col-sm-2'>
                  <div className='image-container'>
                  <svg  className='Ellipse-img'xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                   <circle cx="30.3408" cy="30.6431" r="29.665" fill="#EFEFEF"/>
                  </svg>
                  <div className='svg-container'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='42'
                      height='42'
                      viewBox='0 0 42 42'
                      fill='none'
                    >
                      <path
                        d='M4.8829 29.0784L14.0669 20.2476L21.9389 27.8169L37.6829 12.6784M37.6829 12.6784H25.8749M37.6829 12.6784V24.0322'
                        stroke='black'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                     </div></div>
                    <div><span>05+</span>
                    <p>Thara Companies</p></div>
                </div>
                <div className='grid-child2  col-sm-2'>
                  <div className='image-container'>
                  <svg  className='Ellipse-img'xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                   <circle cx="30.3408" cy="30.6431" r="29.665" fill="#EFEFEF"/>
                  </svg>
                  <div className='svg-container'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='42'
                      height='42'
                      viewBox='0 0 42 42'
                      fill='none'
                    >
                      <path
                        d='M4.8829 29.0784L14.0669 20.2476L21.9389 27.8169L37.6829 12.6784M37.6829 12.6784H25.8749M37.6829 12.6784V24.0322'
                        stroke='black'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                     </div></div>
                    <div><span>More than 20</span>
                    <p>International Brands are collaborated with Us</p></div>
                </div>
              </div>
            </div>
          </div>
        </div1>

        <div className='col-md-6'>
          <div className='grid-item2'>
            <span>Join our</span>
            <span>Global Network</span>
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
