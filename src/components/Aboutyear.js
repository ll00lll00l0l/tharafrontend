import React, { useState } from 'react';
import './Aboutyear.css';
import Ourhqphoto from '../assets/img/Ourhq.png';

function Aboutyear() {
  const years = [
    { year: 1987, data: 'Thara Trading Company is founded and begins distributing FMCG in India.' },
    { year: 1988, data: 'Starts manufacturing hard-boiled candies under the Thara brand.' },
    { year: 1990, data: 'Introduces the Cholac brand of toffees and candies.' },
    { year: 1992, data: ' Launches the Kiddies brand of lollipops and coconut candies.' },
    { year: 1996, data: 'Establishes the Tofomac brand for other products.' },
    { year: 2002, data: 'Shifts focus to trading and importing biscuits, confectioneries, and chocolates.' },
    { year: 2017, data: 'tarts importing instant noodles.' },
    { year: 2020, data: 'Launches the Thara Online Store.' },
    { year: 2023, data: 'Expands into e-commerce logistics with the launch of Tharacart.' }
  ];

  const [activeButton, setActiveButton] = useState(1);

  const activateButton = (buttonId) => {
    setActiveButton(buttonId);
  };

  const activeYearData = years.find((year) => year.year === activeButton)?.data;

  return (
    <div className='yearbroder'>
      <h3>Our History</h3>
      <div className="button-list">
        {years.map((year, index) => (
          <div key={index} className="button-wrapper">
            <button
              className={activeButton === year.year ? 'active' : ''}
              onClick={() => activateButton(year.year)}
            >
              <span>{year.year}</span>
            </button>
            {activeButton === year.year && (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none" className="svg-icon">
                <path d="M13.972 15.358C12.3711 17.4565 9.21231 17.4565 7.61142 15.358L1.0158 6.71204C-0.99256 4.07936 0.884794 0.285947 4.19606 0.285948L17.3873 0.285949C20.6986 0.285949 22.5759 4.07936 20.5676 6.71204L13.972 15.358Z" fill="#44156A"/>
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className='row yearrow'>
        <div className='col-md-6'>
          <img src={Ourhqphoto} alt='' className='img-fluid ' />
        </div>
        <div className=' yearcol col-md-6'>
            <h3>A History of Innovation and Excellence</h3>
            {activeYearData ? <p>{activeYearData}</p> : <p>Thara Group started in 1987 as a small trading company in Kerala, India.
                 With a passion for innovation and a commitment to quality,
                  we have grown into a diversified conglomerate with a global presence.
</p>}

        </div>
      </div>
    </div>
  );
}

export default Aboutyear;
