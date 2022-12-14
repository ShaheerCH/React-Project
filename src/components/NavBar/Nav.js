import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';
import './Nav.css';

const Nav = () => {
  const links = [
    {
      path: 'rockets',
      text: 'Rockets',
    },
    {
      path: 'missions',
      text: 'Missions',
    },
    {
      path: 'profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navBar">
      <div className="logo-container">
        <img src={logo} alt="Cool logo." className="logo-img" width={60} height={60} />
        <h1>Space Travelers&apos; Hub</h1>
      </div>

      <ul className="navUl">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className="nav-link">
              <span>{link.text.toUpperCase()}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
