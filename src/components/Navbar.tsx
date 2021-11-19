import React from 'react';
import {NavLink} from "react-router-dom";

// @ts-ignore
function Navbar({token}) {
  return (
    <header>
      {
        token ?
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
