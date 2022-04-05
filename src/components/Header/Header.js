import React from 'react';
import './Header.css';
const Header = ({ name }) => {
  return (
    <div className="Header">
      <div className="left">
        <i class="fa-solid fa-user"></i>
        <span className="name"> {name}</span>
      </div>
      <div className="right">
        <div className="search">
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <input type="text" placeholder="Search" />
        </div>
        <button className="add">+</button>
        <div className="notification">
          <i class="fa-solid fa-bell"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
