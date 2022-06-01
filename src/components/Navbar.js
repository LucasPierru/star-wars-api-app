import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
      <nav>
        <img src="./Star Wars.png" alt="Star Wars Logo" width="100"/>
        <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
        Home
        </NavLink>  
        <NavLink
          to="/Films"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Films
        </NavLink>
        <NavLink
          to="/Characters"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Characters
        </NavLink>
        <NavLink
          to="/Planets"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Planets
        </NavLink>
        <NavLink
          to="/Spaceships"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Spaceships
        </NavLink>
        <NavLink
          to="/Species"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Species
        </NavLink>
      </nav>
    );
  };

export default Navbar;