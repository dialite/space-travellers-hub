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
          ROCKETS
        </li>
        <li>
          MISSIONS
        </li>
        <li className="divider" />
        <li>
          MY PROFILE
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
