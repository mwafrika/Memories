import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

const navLinks = (props) => {
  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    console.log(pathname);
    return pathname === "/";
  };
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <NavLink to="/" activeClassName="active" isActive={checkActive}>
          Accueil
        </NavLink>
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
