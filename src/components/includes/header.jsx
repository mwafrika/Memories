import React from "react";
import logo from "../../logo.svg";
import MobileNavigation from "./mobileNavigation";
import Navigation from "./navigation";
import "./navBar.css";
import "../../App.css";

const header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <Navigation />
      <MobileNavigation />
    </header>
  );
};

export default header;
