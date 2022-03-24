import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiMicrophone, HiCog } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import './styles/navBar.css';

const NavBar = () => (
  <header>
    <nav className="navHeader">
      <div className="arrow">
        <NavLink to="/">
          <IoIosArrowBack />
        </NavLink>
        <h4 className="year">2022</h4>
      </div>
      <h4 className="app_name">Top Animes</h4>
      <div className="cog_mic">
        <HiMicrophone />
        <HiCog />
      </div>
    </nav>
  </header>
);

export default NavBar;
