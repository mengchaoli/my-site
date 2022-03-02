import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const navListArray = ['/about', '/projects', '/contact'];
  return (
    <div className='header'>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        color={isOpen ? '#0bd3d3' : '#f890e7'}
      />
      <div className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className='nav-list'>
          {navListArray.map((navListItem) => {
            return (
              <li className='nav-list__item'>
                <NavLink
                  to={navListItem}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {navListItem}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='nav-bar'>
        <ul className='nav-list'>
          {navListArray.map((navListItem) => {
            return (
              <li className='nav-list__item'>
                <NavLink
                  to={navListItem}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {navListItem}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
