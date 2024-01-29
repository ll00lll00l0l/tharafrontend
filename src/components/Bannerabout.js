import React from 'react';
import  './Bannerabout.css'; 
import Star  from './Allsvgcomp.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const Bannerabout = ({ title, paragraph,   heading, hideButton ,selectedCase}) => {

  return (
    <>
      <div className='outterdiv'>
        <div className='sdivrow row'>
          <div className=' col-md-8'>
            <p>{title}</p>
            <h1>{heading}  {selectedCase === "case7" && <Star caseValue="case7" />} 
              {selectedCase === "case9" && <Star caseValue="case9" />}
            
            </h1>
            <div className='sectiondiv'>
              <div className='innerdiv'>
                <div>{paragraph}</div>
                {!hideButton && (
                  <div className="arrow-container">
                    <button className="btn-white" id="hide">Contact Us
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
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className='innerdiv2 col-md-4'>
            <div>
              <Star className='imgsvg' caseValue='case6' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannerabout;
