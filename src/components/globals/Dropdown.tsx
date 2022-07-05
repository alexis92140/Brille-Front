import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div className="navbar__dropdown">
      <div className="navbar__dropdown__left">
        <NavLink to="/collection">
          <li>Toute la collection</li>
        </NavLink>
        <NavLink to="">
          <li>Les Essentiels / Bonjour</li>
        </NavLink>
      </div>

      <div className="navbar__dropdown__right">
        <div className="navbar__dropdown__right">
          <NavLink to="">
            <li>Pour le quotidien</li>
          </NavLink>
        </div>
        <div>
          <NavLink to="">
            <li>Pour une soirée</li>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
