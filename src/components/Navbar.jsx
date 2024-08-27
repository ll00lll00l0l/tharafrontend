// useNavbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo   from './Allsvgcomp.js';

import "../styles/NavbarStyles.css";

const useNavbar = () => {
  const [click, setClick] = useState(false);
  // const [aboutoption, setAboutoption] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-image" caseValue={"case14"} />
      </Link>
      <ol className={click ? "nav-menu active" : "nav-menu"}>
        <li className={location.pathname === "/" ? "active" : " "}>
          <Link to="/">Home</Link>
        </li>
        {/* <li className={location.pathname.startsWith('/About') ? 'active nav-menu-dropdown' : ' '}> */}
        {/* className={location.pathname.startsWith('/About') ? 'active nav-menu-dropdown' : ' '} */}
        {/* <li1>
          <Link to="/" onClick={() => setAboutoption(true)}>
            About Us
          </Link>
          {aboutoption && (<ul className="nav-dropdown">
            <li>
              <Link to="/about">Who We Are</Link>
            </li>
            <li>
              <Link to="/company">Our Companies</Link>
            </li>
            <li>
              <Link to="/brand">Brands & Collaboration</Link>
            </li>
          </ul>) }
        </li1> */}
        <li className={location.pathname === "/about" ? "active" : " "}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={location.pathname === "/company" ? "active" : " "}>
          <Link to="/company">Our Companies</Link>
        </li>
        <li className={location.pathname === "/brand" ? "active" : " "}>
          <Link to="/brand">Brands</Link>
        </li>
        <li className={location.pathname === "/Career" ? "active" : " "}>
          <Link to="/Career">Career</Link>
        </li>
        <li className={location.pathname === "/Contact" ? "active" : " "}>
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ol>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes  size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default useNavbar;
