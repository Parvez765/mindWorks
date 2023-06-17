import React, { useState } from 'react';
import './Navbar.css';
import { FaAngleDown, FaBars, FaRegMoon, FaShareSquare } from "react-icons/fa";

const NavBar = () => {

  const [cross, setCross] = useState(true)

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

  const handleShareClick = () => {
    setCross(true);
  };



  return (
    <nav className="navbar">
      <div className="container mx-auto navContainer">
        <div className=''>
          <img src="https://i.ibb.co/yWx2LpH/navLogo.png" alt="Mind WorksBd Navbar Logo" className='w-[150px] lg:w-[300px]' />
        </div>

        <div className='hidden lg:block'>
          <div className={`navbar-menu ${isOpen ? 'open' : ''}`} onMouseLeave={handleMouseLeave}>
            <ul className="navbar-nav ">
              <li
                className={`nav-item dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter('services')}
              >
                <button
                  className="dropdown-toggle serviceToggle flex items-center gap-[6px]"
                  onClick={toggleNavbar}
                  onBlur={() => setIsOpen(false)}
                >
                  Services <FaAngleDown />
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
            <div className='ml-[16px]'>
              <button className='appoinmentBtn'>Schedule a call</button>
            </div>
          </div>
        </div>
        <div className='block lg:hidden' onClick={() => setCross(!cross)}>
          {
            cross ? <FaBars className="text-[white] text-[22px]" /> : null
          }
        </div>
      </div>
      <div>
        {cross ? (
          <div></div>
        ) : (
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button">
                <FaBars onClick={() => setCross(cross)} className='text-[white] text-[22px]' />
              </label>
            </div>
            {
              !cross && <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <div className="ml-[200px]">
                    <FaShareSquare className='text-[black] text-[22px]' onClick={handleShareClick} />
                  </div>
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            }
          </div>
        )}
      </div>

    </nav>
  );
};

export default NavBar;
