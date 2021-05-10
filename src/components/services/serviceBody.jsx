import React from "react";
import mw from "../../images/img3.png";
import logo from "../../logo.svg";
import "../../App.css";
import { WHITE, BLUE_VIOLET } from "../../constants/color";
import service from "../../images/service.svg";
import formation from "../../images/formation.svg";
import assistance2 from "../../images/assistance2.svg";
import vente from "../../images/vente.svg";
import vente2 from "../../images/vente2.svg";
import vente3 from "../../images/vente3.svg";
import development from "../../images/development.svg";
import development2 from "../../images/development2.svg";
import computer2 from "../../images/computer2.svg";
import marketing from "../../images/marketing.svg";
import conseil from "../../images/conseil.svg";
const serviceBody = () => {
  return (
    <>
      <main>
        <div className="banner">
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
            <button>Register</button>
          </div>
          <img src={service} alt="" />
        </div>
        <div className="service-block back-color" id="formation">
          <img src={formation} alt="" />
          <div className="content">
            <h2 style={style.paragraph4}>FORMATIONS EN INFORMATIQUE</h2>
            <p style={style.paragraph1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              recusandae repellat corrupti ducimus iure. Fugiat rem doloremque
              aliquid libero praesentium. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde quidem ipsum dolore quas natus
              possimus neque consectetur at iure suscipit.
            </p>
          </div>
        </div>
        <div className="service-block backW-color" id="assistance">
          <div className="content">
            <h2 style={style.paragraph4}>ASSISTANCE & MAINTENANCE</h2>
            <p style={style.paragraph1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              recusandae repellat corrupti ducimus iure. Fugiat rem doloremque
              aliquid libero praesentium. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde quidem ipsum dolore quas natus
              possimus neque consectetur at iure suscipit.
            </p>
          </div>
          <img src={assistance2} alt="" />
        </div>
        <div className="service-block back-color" id="vente">
          <img src={vente2} alt="" />
          <div className="content" style={style.paragraph2}>
            <h2 style={style.paragraph4}>VENTES MATERIELS INFORMATIQUES</h2>
            <p style={style.paragraph1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              recusandae repellat corrupti ducimus iure. Fugiat rem doloremque
              aliquid libero praesentium. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde quidem ipsum dolore quas natus
              possimus neque consectetur at iure suscipit.
            </p>
          </div>
        </div>
        <div className="service-block backW-color" id="developement">
          <div className="content">
            <h2 style={style.paragraph4}>DEVELOPPEMENT DES APPLICATIONS</h2>
            <p style={style.paragraph1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              recusandae repellat corrupti ducimus iure. Fugiat rem doloremque
              aliquid libero praesentium. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde quidem ipsum dolore quas natus
              possimus neque consectetur at iure suscipit.
            </p>
          </div>
          <img src={development2} alt="" />
        </div>
        <div className="service-block back-color" id="marketing">
          <img src={marketing} alt="" />
          <div className="content">
            <h2 style={style.paragraph4}>MARKETING DIGITAL</h2>
            <p style={style.paragraph1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              recusandae repellat corrupti ducimus iure. Fugiat rem doloremque
              aliquid libero praesentium. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde quidem ipsum dolore quas natus
              possimus neque consectetur at iure suscipit.
            </p>
          </div>
        </div>
        <div className="service-block backW-color" id="conseil">
          <div className="content">
            <h2 style={style.paragraph4}>CONSEIL ET AUDIT</h2>
            <p style={style.paragraph1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              recusandae repellat corrupti ducimus iure. Fugiat rem doloremque
              aliquid libero praesentium. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Unde quidem ipsum dolore quas natus
              possimus neque consectetur at iure suscipit.
            </p>
          </div>
          <img src={conseil} alt="" />
        </div>
      </main>
    </>
  );
};

const style = {
  paragraph1: {
    color: BLUE_VIOLET,
    fontSize: "15px",
    margin: "2em 0em",
  },
  paragraph2: {
    color: WHITE,
    fontSize: "15px",
    margin: "2em 0em",
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
export default serviceBody;
