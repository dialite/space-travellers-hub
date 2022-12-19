import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../images/logo.jpg';

const Header = () => (
  <header>
    <NavLink to="/">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Space Traverlers&apos; Hub</h1>
      </div>
    </NavLink>
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            ROCKETS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            MISSIONS
          </NavLink>
        </li>
        <li className="divider" />
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            MY PROFILE
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
