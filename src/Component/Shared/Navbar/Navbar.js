import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavDrawer from "./NavDrawer/NavDrawer";

const NavBar = () => {
  return (
    // <nav className="navbar">
    //   <div className="container mx-auto navContainer">
    //     <div className="">
    //       <img
    //         src="https://i.ibb.co/yWx2LpH/navLogo.png"
    //         alt="Mind WorksBd Navbar Logo"
    //         className="w-[300px]"
    //       />
    //     </div>
    //     <div
    //       className={`navbar-toggle ${isOpen ? "open" : ""}`}
    //       onClick={toggleNavbar}
    //     >
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </div>
    //     <div
    //       className={`navbar-menu ${isOpen ? "open" : ""}`}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       <ul className="navbar-nav">
    //         <li
    //           className={`nav-item dropdown ${
    //             activeDropdown === "services" ? "active" : ""
    //           }`}
    //           onMouseEnter={() => handleMouseEnter("services")}
    //         >
    //           <button
    //             className="dropdown-toggle serviceToggle flex items-center gap-[6px]"
    //             onClick={toggleNavbar}
    //             onBlur={() => setIsOpen(false)}
    //           >
    //             Services <FaAngleDown />
    //           </button>
    //           <ul
    //             className={`dropdown-menu ${
    //               activeDropdown === "services" ? "open" : ""
    //             }`}
    //           >
    //             <li className="nav-item">
    //               <a
    //                 href="#service1"
    //                 className="nav-links"
    //                 onClick={handleLinkClick}
    //               >
    //                 Consulting
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 href="#service2"
    //                 className="nav-links"
    //                 onClick={handleLinkClick}
    //               >
    //                 MSI
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 href="#service3"
    //                 className="nav-links"
    //                 onClick={handleLinkClick}
    //               >
    //                 Training
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li
    //           className={`nav-item ${
    //             activeDropdown === "about" ? "active" : ""
    //           }`}
    //           onMouseEnter={() => handleMouseEnter("about")}
    //         >
    //           <a href="#about" className="nav-link" onClick={handleLinkClick}>
    //             Seed
    //           </a>
    //         </li>
    //         <li
    //           className={`nav-item ${
    //             activeDropdown === "contact" ? "active" : ""
    //           }`}
    //           onMouseEnter={() => handleMouseEnter("contact")}
    //         >
    //           <a href="#contact" className="nav-link" onClick={handleLinkClick}>
    //             Lean Transformation
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="#contact" className="nav-link" onClick={handleLinkClick}>
    //             About Us
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="#contact" className="nav-link" onClick={handleLinkClick}>
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="ml-[16px]">
    //       <button className="appoinmentBtn">Schedule a call</button>
    //     </div>
    //   </div>
    // </nav>
    <div className="sticky top-0 z-40 py-4 px-4 xl:px-10 2xl:px-20 grid grid-cols-5 xl:grid-cols-4 bg-blue-900">
      <div className="flex justify-start items-center">
        <Link to="/">
          <img
            src="https://i.ibb.co/yWx2LpH/navLogo.png"
            alt="Mind WorksBd Navbar Logo"
            className="w-[250px] hover:scale-110 ease-in-out duration-300"
          />
        </Link>
      </div>

      <div className="col-span-3 xl:col-span-2 hidden lg:flex lg:justify-center lg:items-center gap-5 xl:gap-8">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0}>
            <h2 className="text-white lg:text-[15px] 2xl:text-[18px] font-bold tracking-wide hover:text-blue-400 ease-in-out duration-300 uppercase text-center hover:cursor-pointer">
              Services
            </h2>
          </label>

          <div
            tabIndex={0}
            className="dropdown-content bg-blue-900 rounded mt-0 ml-[-15px] w-[150px]"
          >
            <div className="py-2"></div>
            <div className="glass py-4 px-4">
              <NavLink to="services/consulting">
                <h2 className="text-white hover:text-blue-300 border-r border-transparent hover:border-blue-300 text-left lg:text-[12px] 2xl:text-[15px] font-bold tracking-wide uppercase duration-300 ease-in-out mb-4">
                  Consulting
                </h2>
              </NavLink>

              <NavLink to="services/msi">
                <h2 className="text-white hover:text-blue-300 border-r border-transparent hover:border-blue-300 text-left lg:text-[12px] 2xl:text-[15px] font-bold tracking-wide uppercase duration-300 ease-in-out mb-4">
                  MSI
                </h2>
              </NavLink>
            </div>
          </div>
        </div>

        <NavLink to="/seed">
          <h2 className="text-white lg:text-[15px] 2xl:text-[18px] font-bold tracking-wide hover:text-blue-400 ease-in-out duration-300 uppercase text-center">
            Seed
          </h2>
        </NavLink>

        <NavLink to="/lean_transformation">
          <h2 className="text-white lg:text-[15px] 2xl:text-[18px] font-bold tracking-wide hover:text-blue-400 ease-in-out duration-300 uppercase text-center">
            Lean Transformation
          </h2>
        </NavLink>

        <NavLink to="/about">
          <h2 className="text-white lg:text-[15px] 2xl:text-[18px] font-bold tracking-wide hover:text-blue-400 ease-in-out duration-300 uppercase text-center">
            About Us
          </h2>
        </NavLink>

        <NavLink to="/contact">
          <h2 className="text-white lg:text-[15px] 2xl:text-[18px] font-bold tracking-wide hover:text-blue-400 ease-in-out duration-300 uppercase text-center">
            Contact
          </h2>
        </NavLink>
      </div>

      <div className="hidden lg:block">
        <div className="h-full w-full flex justify-end items-center">
          <button className="btn-primary glass w-[250px] bg-blue-700 hover:bg-white text-white hover:text-black duration-300 ease-in-out text-lg xl:text-xl px-4 py-2 rounded">
            Schedule a Call
          </button>
        </div>

        <div className="lg:hidden flex justify-center items-center">
          <NavDrawer />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
