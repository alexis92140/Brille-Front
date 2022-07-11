/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
// ----- Package components -----
import 'react-js-stickynav/dist/index.css';

// ----- Hamburger-React Icons -----
import { Sling as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import { StickyNav } from 'react-js-stickynav';
import Fade from 'react-reveal/Fade';
import { Link, NavLink } from 'react-router-dom';

// ----- datas -----
import navlinks from '../../../data/navLinks';
// ----- Component -----
import Dropdown from './Dropdown';

// ----------------------------------------------------------------

const Navbar = () => {
  // ! STATES :
  // Manage the hamburger menu
  const [isOpened, setIsOpened] = useState(false);
  //Manage navbar background-color
  const [color, setColor] = useState(false);

  // ! FUNCTIONS :
  // Manage the hamburger menu
  const closeMenu = () => {
    setIsOpened(false);
  };
  //Change navbar background-color when scrolling
  const changeColor = () => {
    window.scrollY >= 20 ? setColor(true) : setColor(false);
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div>
      <StickyNav>
        <nav className="navbar">
          {/* ---- NAVBAR ---- */}
          <ul className={color ? 'navbar__ul__headerColor' : 'navbar__ul'}>
            {/* >> Nav: Left Side*/}
            <div className="navbar__ul__container">
              {/* Dropdown menu feature not confirmed yet */}
              {/* <div className="navbar__dropdown">
                <Fade clear>
                  <Dropdown />
                </Fade>
              </div> */}

              {navlinks &&
                navlinks.map(({ id, leftTitle, path }) => (
                  <NavLink key={id} to={path}>
                    <li className="navbar__li">{leftTitle}</li>
                  </NavLink>
                ))}
            </div>

            {/* >> LOGO */}
            <Link to="/home">
              <div className="logoContainer">
                <img
                  src="/assets/images/logo.png"
                  alt="Logo du site"
                  className="logoContainer__logo"
                />
              </div>
            </Link>

            {/* >> Nav : Right Side */}
            <div className="navbar__ul__container">
              {navlinks?.map(({ id, rightTitle, path }) => (
                <NavLink key={id} to={path}>
                  <li className="navbar__li">{rightTitle}</li>
                </NavLink>
              ))}
            </div>
          </ul>

          {/* ----- Hamburger logic ----- */}
          <div role="button" className="hamburger">
            <Hamburger
              toggled={isOpened}
              toggle={setIsOpened}
              distance="md"
              size={25}
              duration={0.5}
              color={isOpened ? '#ffffff' : '#0d6e53'}
              easing="ease-in"
              label="montre le menu"
              hideOutline={true}
            />
          </div>
          {/* ----- MOBILE MENU ----- */}
          <ul className={!isOpened ? 'hiddenMenu' : 'showMenu'}>
            {navlinks &&
              navlinks.map(({ id, responsiveTitle, path }) => (
                <div role="button" tabIndex={0} onClick={closeMenu} key={id}>
                  <li className="hamburgerList">
                    <Link to={path} onClick={closeMenu}>
                      <p className="hamburgerList__title">{responsiveTitle}</p>
                    </Link>
                  </li>
                </div>
              ))}
          </ul>
        </nav>
      </StickyNav>
    </div>
  );
};

export default Navbar;
