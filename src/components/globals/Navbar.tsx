/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import 'react-js-stickynav/dist/index.css';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Sling as Hamburger } from 'hamburger-react';
import React, { useContext, useState } from 'react';
import { StickyNav } from 'react-js-stickynav';
import { Link, NavLink } from 'react-router-dom';

import navlinks from '../../../data/navLinks';
import ShoppingCartContext from '../../Context/ShoppingCartContext';

// ---------------Cart icon style config ----------------------------

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -4,
    top: 11,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 3px',
  },
}));

// ----------------------------------------------------------------

const Navbar = () => {
  // >> STATES

  // For  the hamburger menu
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // For the navbar background-color on scroll
  const [isColor, setIsColor] = useState<boolean>(false);

  // >> FUNCTIONS

  // Manage the hamburger menu
  const closeMenu = () => {
    setIsOpened(false);
  };

  // Change the navbar background-color when scrolling
  const changeColor = () => {
    window.scrollY >= 20 ? setIsColor(true) : setIsColor(false);
  };

  // To listen the navbar scrolling event
  window.addEventListener('scroll', changeColor);

  // >> VARIABLES

  // To use the cartItems function from the ShoppingCartContext file
  const { cartItems } = useContext(ShoppingCartContext);
  console.log(cartItems);

  return (
    <div>
      <StickyNav>
        <nav className="navbar">
          {/* ---- NAVBAR ---- */}
          <ul className={isColor ? 'navbar__ul__headerColor' : 'navbar__ul'}>
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
              <Link to="/panier" onClick={closeMenu}>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Link>
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
