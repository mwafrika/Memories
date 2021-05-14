import React from "react";
import novatech2 from "../../images/novatech2.png";
import MobileNavigation from "./mobileNavigation";
import Navigation from "./navigation";
import "./navBar.css";
import "../../App.css";

const header = () => {
  return (
    <header>
      <img src={novatech2} alt="" />
      <Navigation />
      <MobileNavigation />
    </header>
  );
};

export default header;
