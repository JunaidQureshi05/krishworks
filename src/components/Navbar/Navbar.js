import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div className="Navbar">
      <div className="logo">
        <div>
          <i class="fa-solid fa-tooth"></i>
        </div>
        <div>
          <h1>Zendenta</h1>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>

      <ul className="links">
        <li className={location === '/overview' ? 'active' : ''}>
          {' '}
          <Link to="/overview">
            {' '}
            <i class="fa-solid fa-question"></i>Overview
          </Link>
        </li>
        <li className={location === '/calender' ? 'active' : ''}>
          <Link to="calender">
            <i class="fa-solid fa-calendar"></i>Calender
          </Link>
        </li>
        <li className={location === '/patient-list' ? 'active' : ''}>
          {' '}
          <Link to="/patient-list">
            {' '}
            <i class="fa-solid fa-user"></i>Patient List
          </Link>
        </li>
        <li className={location === '/messages' ? 'active' : ''}>
          <Link to="/messages">
            <i class="fa-solid fa-message"></i>Messages
          </Link>
        </li>
        <li className={location === '/payment-info' ? 'active' : ''}>
          <Link to="/payment-info">
            <i class="fa fa-dollar"></i> Payment Information
          </Link>
        </li>
        <li className={location === '/settings' ? 'active' : ''}>
          <Link to="settings">
            <i class="fa-solid fa-gear"></i>Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
