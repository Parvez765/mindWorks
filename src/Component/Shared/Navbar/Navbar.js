import React, { useState } from 'react';
import './Navbar.css';
import { FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container mx-auto navContainer">
        <div>
          <img src="https://i.ibb.co/yWx2LpH/navLogo.png" alt="Mind WorksBd Navbar Logo" className='w-[250px]'/>
        </div>
        <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button 
                className="dropdown-toggle flex items-center gap-[6px]"
                onClick={toggleNavbar}
                onBlur={() => setIsOpen(false)}
              >
                Services <FaAngleDown/>
              </button>
              <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                <li className="nav-item">
                  <a href="#service1" className="nav-link" onClick={handleLinkClick}>
                    Consulting
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#service2" className="nav-link" onClick={handleLinkClick}>
                    MSI
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#service3" className="nav-link" onClick={handleLinkClick}>
                    Training
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={handleLinkClick}>
                Seed
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={handleLinkClick}>
                LEAN Transformation
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={handleLinkClick}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
