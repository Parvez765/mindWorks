import React, { useState } from 'react';
import './Navbar.css';
import { FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="container mx-auto navContainer">
        <div className=''>
          <img src="https://i.ibb.co/yWx2LpH/navLogo.png" alt="Mind WorksBd Navbar Logo" className='w-[300px]'/>
        </div>
        <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`} onMouseLeave={handleMouseLeave}>
          <ul className="navbar-nav">
            <li
              className={`nav-item dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('services')}
            >
              <button 
                className="dropdown-toggle serviceToggle flex items-center gap-[6px]"
                onClick={toggleNavbar}
                onBlur={() => setIsOpen(false)}
              >
                Services <FaAngleDown/>
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'open' : ''}`}>
                <li className="nav-item">
                  <a href="#service1" className="nav-links" onClick={handleLinkClick}>
                    Consulting
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#service2" className="nav-links" onClick={handleLinkClick}>
                    MSI
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#service3" className="nav-links" onClick={handleLinkClick}>
                    Training
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item ${activeDropdown === 'about' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('about')}
            >
              <a href="#about" className="nav-link" onClick={handleLinkClick}>
                Seed
              </a>
            </li>
            <li
              className={`nav-item ${activeDropdown === 'contact' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('contact')}
            >
              <a href="#contact" className="nav-link" onClick={handleLinkClick}>
                Lean Transformation
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
        <div className='ml-[16px]'>
          <button className='appoinmentBtn'>Schedule a call</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
