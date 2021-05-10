import React from "react";
import mw from "../../images/img3.png";
import logo from "../../logo.svg";
import "../../css/style.css";
import team from "../../images/team.svg";
import team2 from "../../images/team2.svg";
import historique from "../../images/historique.svg";
import historique2 from "../../images/historique2.svg";
import vision from "../../images/vision.svg";
import img1 from "../../images/mwafrika.JPG";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import engage from "../../images/engage.svg";
import expert from "../../images/expert.svg";
import proactive from "../../images/proactive.svg";
import reactive from "../../images/react.svg";
import excellence from "../../images/excellence.svg";
import care from "../../images/care.svg";
import { BLUE_VIOLET, WHITE, GREY } from "../../constants/color";
const content = () => {
  return (
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
        <img src={team} alt="" />
      </div>
      <div className="service-block back-color">
        <img src={historique2} alt="" />
        <div className="content">
          <h2 style={style.paragraph4}>Historique</h2>
          <p style={style.paragraph1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            recusandae repellat corrupti ducimus iure. Fugiat rem doloremque
            aliquid libero praesentium. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde quidem ipsum dolore quas natus possimus neque
            consectetur at iure suscipit.
          </p>
        </div>
      </div>
      <div className="target target2" style={{ backgroundColor: "white" }}>
        <div className="content">
          <h2 style={style.paragraph4}>Notre Mission</h2>
          <p style={style.paragraph1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            architecto molestiae recusandae non illum. Perferendis assumenda
            praesentium et iste magni? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, laborum.
          </p>
        </div>
        <div className="content vision">
          <img src={vision} alt="" />
        </div>
        <div className="content">
          <h2 style={style.paragraph4}>Notre vision </h2>
          <p style={style.paragraph1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            architecto molestiae recusandae non illum. Perferendis assumenda
            praesentium et iste magni? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, laborum.
          </p>
        </div>
      </div>

      <div
        style={{
          background: GREY,
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="service-title">
          <p className="s-title">Nos Valeurs</p>
          <p className="s-body">
            Nous vous accompagnons sur 100% de vos problématiques informatiques
          </p>
        </div>
        <div className="second-desc" style={{ backgroundColor: "#F4F4F4" }}>
          <div style={{ backgroundColor: "#F4F4F4" }} className="service">
            <img src={engage} alt="" />
            <h2 style={{ textAlign: "center" }}>Engagement</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              accusantium.
            </p>
          </div>
          <div className="service">
            <img src={expert} alt="" />
            <h2 style={{ textAlign: "center" }}>Expertise</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              accusantium.
            </p>
          </div>
          <div className="service">
            <img src={proactive} alt="" />
            <h2 style={{ textAlign: "center" }}>Proactivité</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              accusantium.
            </p>
          </div>
          <div className="service">
            <img src={reactive} alt="" />
            <h2 style={{ textAlign: "center" }}>Réactivité</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              accusantium.
            </p>
          </div>
          <div className="service">
            <img src={excellence} alt="" />
            <h2 style={{ textAlign: "center" }}>Excellence technique</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              accusantium.
            </p>
          </div>
          <div className="service">
            <img src={care} alt="" />
            <h2 style={{ textAlign: "center" }}>Customer care</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              accusantium.
            </p>
          </div>
        </div>
      </div>

      <div className="btn-service">
        <a href="/services/">
          <button>Decouvrir tout nos services</button>
        </a>
      </div>
      <div style={{ backgroundColor: GREY }}>
        <div className="service-title">
          <p className="s-title">Notre equipe</p>
        </div>
        <div className="second-desc">
          <div className="service">
            <img src={img1} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              accusantium.
            </p>
          </div>
          <div className="service">
            <img src={img4} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              accusantium.
            </p>
          </div>
          <div className="service">
            <img src={img3} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              accusantium.
            </p>
          </div>
        </div>
      </div>
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
export default content;
