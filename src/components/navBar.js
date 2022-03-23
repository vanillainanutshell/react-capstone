import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiMicrophone, HiCog } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';

const NavBar = () => (
  <header>
    <nav>
      <div>
        <NavLink to="/">
          <IoIosArrowBack />
        </NavLink>
        <h4>year</h4>
      </div>
      <h4>Top Animes</h4>
      <div>
        <HiMicrophone />
        <HiCog />
      </div>
    </nav>
  </header>
);

export default NavBar;
