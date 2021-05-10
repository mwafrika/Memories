import React from "react";
import logo from "../../logo.svg";
import Form from "./forms";
import { BLUE_VIOLET, WHITE } from "../../constants/color";
import contact from "../../images/contact.svg";
const contactBody = () => {
  return (
    <main>
      <div className="banner">
        <img src={contact} alt="" />
        <div className="content">
          <h2 style={style.paragraph3}>
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p style={style.paragraph2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            architecto molestiae recusandae non illum. Perferendis assumenda
            praesentium et iste magni? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, laborum.
          </p>
        </div>
      </div>
      <Form />
    </main>
  );
};
const style = {
  paragraph1: {
    color: BLUE_VIOLET,
    fontSize: "15px",
    margin: "1em 0em",
  },
  paragraph2: {
    color: WHITE,
    fontSize: "15px",
    margin: "1em 0em",
  },
  paragraph3: {
    color: WHITE,
    fontSize: "35px",
    margin: "1em 0em",
  },
  paragraph4: {
    color: BLUE_VIOLET,
    fontSize: "35px",
    margin: "1em 0em",
  },
};
export default contactBody;
