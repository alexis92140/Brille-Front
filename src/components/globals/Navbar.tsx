import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import navlinks from '../../../data/navLinks';

const Navbar = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <ul className="navbar__ul">
          {/* Nav: Left Side*/}
          <div className="navbar__ul__container">
            {navlinks &&
              navlinks.map(({ id, name1, path, title1, title2 }) => (
                <NavLink key={id} to={path}>
                  <li className="navbar__li">{name1}</li>
                  <div className="navbar__dropdownContent">
                    <Link to="" className="navbar__dropdownContent__titles">
                      {title1}
                    </Link>
                    <Link to="" className="navbar__dropdownContent__titles">
                      {title2}
                    </Link>
                  </div>
                </NavLink>
              ))}
          </div>

          {/* Nav : Right Side >>> NON TERMINEE*/}
          <div className="navbar__ul__container">
            {navlinks &&
              navlinks.map(({ id, name2, path }) => (
                <NavLink key={id} to={path}>
                  <li className="navbar__li">{name2}</li>
                </NavLink>
              ))}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
