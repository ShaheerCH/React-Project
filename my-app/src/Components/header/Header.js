import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from './planet.png';

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <img src={logo} alt="logo" className="logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <ul>
          <li>Rockets</li>
          <li>Missions</li>
          <li>
            <NavLink to="my-profile" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
