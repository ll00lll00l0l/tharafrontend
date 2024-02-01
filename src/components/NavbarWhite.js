// useNavbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/img/logopurp.png';
import './NavbarWhiteStyles.css';

const useNavbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);

  return (
    <div className="wheader">
      <Link to="/">
        <img className="wlogo-image" src={logo} alt="img" />
      </Link>
      <ol className={click ? 'wnav-menu active' : 'wnav-menu'}>
        <div className='nav-options'>
        <li className={location.pathname === '/' ? 'active' : ' '}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname.startsWith('/About') ? 'active wnav-menu-dropdown' : ' '}>
          <Link >About Us</Link>
         
          <ul className="wnav-dropdown"> <div className=''>
        <li className={location.pathname === '/About' ? 'active' : ' '}>
              <Link to="/about">Who We Are</Link>
            </li>
        <li className={location.pathname === '/About' ? 'active' : ' '}>
              <Link to="/company">Our Companies</Link>
            </li>
        <li className={location.pathname === '/About' ? 'active' : ' '}>
              <Link to="/brand">Brands & Collaboration</Link>
            </li></div>
          </ul>
        </li>
        <li className={location.pathname === '/Product' ? 'active' : ' '}>
          <Link to="/Product">Product</Link>
        </li>
        <li className={location.pathname === '/Career' ? 'active' : ' '}>
          <Link to="/Career">Career</Link>
        </li>
        <li className={location.pathname === '/Contact' ? 'active' : ' '}>
          <Link to="/Contact">Contact Us</Link>
        </li>
        </div>
        <li   className={location.pathname === '/' ? 'active' : ' '}>
          <Link to="/Contact">
            <div className="arrow-container">
              <button className="btn-purple" id="btnToHide">
                Let’s Talk
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 31" fill="none" className='arrow'>
                  <path d="M17.4016 8L24.6932 15.5M24.6932 15.5L17.4016 23M24.6932 15.5L7.19324 15.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </Link>
        </li>
      </ol>
      <div className="whamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: 'black' }} />
        ) : (
          <FaBars size={20} style={{ color: 'black' }} />
        )}
      </div>
    </div>
  );
};

export default useNavbar;
