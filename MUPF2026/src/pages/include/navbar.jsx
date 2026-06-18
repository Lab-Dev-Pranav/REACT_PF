import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './navbar.css'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">


    <div className="logo-container">
          <img className="logo" src="TAB-LOGO.png" alt="logo" />

          {/* LOGO */}
          <Link to="/" className="navbar-TITLE">
            _Dev.Pranav____
          </Link>

      </div>

          {/* DESKTOP LINKS */}
          <div className="navbar-links">
            <Link to="/home">Home</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* HAMBURGER */}
          <div
            className="navbar-hamburger"
            onClick={() => setOpenMenu(true)}
          >
            <HiMenuAlt3 />
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${openMenu ? 'active' : ''}`}>

        {/* TOP */}
        <div className="mobile-menu-top">
          {/* LOGO */}
          <Link to="/" className="navbar-logo">
            _Dev.Pranav____
          </Link>

          <button onClick={closeMenu}>
            <HiX />
          </button>
        </div>

        {/* LINKS */}
        <div className="mobile-menu-links">
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/skills" onClick={closeMenu}>
            Skills
          </Link>

          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>

          <Link to="/experience" onClick={closeMenu}>
            Experience
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;