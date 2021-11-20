import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {NavbarInterface} from "./interfaces/navbar-interface";


const Navbar:FC<NavbarInterface> = ({authorize}) => {
  return (
    <header>
      {
        authorize ?
          <div>Вы авторизованы</div>
          : ''
      }
      <nav>
        <ul>
          <li><NavLink to="/">Главная</NavLink></li>
          <li><NavLink to="/desks">Desks</NavLink></li>
          <li><NavLink to="/desks-list">DesksList</NavLink></li>
          <li><NavLink to="/cards">Cards</NavLink></li>
          <li><NavLink to="/tasks">Tasks</NavLink></li>
          <li><NavLink to="/auth">Auth</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
