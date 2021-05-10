import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";
const navLinks = (props) => {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <NavLink to="/">Accueil</NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <NavLink to="/services">Nos service</NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <NavLink to="/identification">Qui sommes-nous ?</NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <NavLink to="/rejoindre">Nous Rejoindre</NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default navLinks;
