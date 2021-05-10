import React from "react";
import logo from "../../logo.svg";
import { BLUE_VIOLET, WHITE } from "../../constants/color";

const footer = () => {
  return (
    <footer>
      <div className="desc">
        <h2 className="space">Lorem ipsum dolor sit.</h2>
        <p className="space">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          eveniet!
        </p>
        <div className="contact">
          <img src={logo} alt="" />
          <p>okokokokokokokokokokok</p>
        </div>
        <div className="contact">
          <img src={logo} alt="" />
          <p>okokokokokokokokokokok</p>
        </div>
      </div>
      <div className="desc-last">
        <p>kookokokokokokokokokokok</p>
      </div>
    </footer>
  );
};

const style = {
  paragraph2: {
    color: WHITE,
    fontSize: "40px",
  },
  paragraph3: {
    color: WHITE,
    fontSize: "15px",
  },
};

export default footer;
