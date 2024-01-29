import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarStyles.css';

const useNavbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className={`header navbar ${click ? 'active' : ''}`}>
      <Link to="/">
        <img className="logo-image logo-image" src={logo} alt="img" />
      </Link>

      <Nav className={`nav-menu nav-menu ${click ? 'active' : ''}`}>
        <NavDropdown title="About" id="basic-nav-dropdown" className=" nav-menu nav-dropdown">
          <NavDropdown.Item as={Link} to="/About">
            About
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/company">
            Company
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/brand">
            Brand
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link as={Link} to="/Product" className="nav-link">
          Product
        </Nav.Link>
        <Nav.Link as={Link} to="/Career" className="nav-link">
          Career
        </Nav.Link>
        <Nav.Link as={Link} to="/Contact Us" className="nav-link">
          Contact Us
        </Nav.Link>
      </Nav>

      <div className={`hamburger hamburger ${click ? 'active' : ''}`} onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: 'white' }} />
        ) : (
          <FaBars size={20} style={{ color: 'white' }} />
        )}
      </div>
    </div>
  );
};

export default useNavbar;
