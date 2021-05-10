import React from "react";
import { BLUE_VIOLET, GREY, WHITE } from "../../constants/color";
import "../../App.css";
import "./rejoindre.css";
import welcome from "../../images/welcome.svg";
import welcome2 from "../../images/welcome2.svg";
import construction from "../../images/construction.svg";
import celebration from "../../images/celebration.svg";
import passion from "../../images/passion.svg";
import learning from "../../images/learning.svg";
import collabo1 from "../../images/collabo1.svg";
import collabo5 from "../../images/collabo5.svg";
import collabo3 from "../../images/collabo3.svg";
import collabo4 from "../../images/collabo4.svg";
import logo from "../../logo.svg";

const rejoindreBody = () => {
  return (
    <main>
      <div className="banner">
        <img src={welcome2} alt="" />
        <div className="content">
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            architecto molestiae recusandae non illum. Perferendis assumenda
            praesentium et iste magni? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, laborum.
          </p>
          <button>Register</button>
        </div>
      </div>
      <p className="title-raison">3 bonnes raisons de nous rejoindre</p>
      <div className="raisons">
        <div className="blockContent">
          <img src={celebration} alt="" />
          <h2 style={{ textAlign: "center", paddingTop: 10 }}>
            Environement de travail
          </h2>
          <p style={style.cardDetail}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            reprehenderit?
          </p>
        </div>
        <div className="blockContent">
          <img src={passion} alt="" />
          <h2 style={{ textAlign: "center", paddingTop: 10 }}>Passion</h2>
          <p style={style.cardDetail}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            reprehenderit?
          </p>
        </div>
        <div className="blockContent">
          <img src={learning} alt="" />
          <h2 style={{ textAlign: "center", paddingTop: 10 }}>
            Apprentissage continu
          </h2>
          <p style={style.cardDetail}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            reprehenderit?
          </p>
        </div>
      </div>
      <div className="block2">
        <div className="blockContent1" style={{ backgroundColor: "lavender" }}>
          <img src={construction} alt="" style={{ width: "100%" }} />
        </div>
        <div className="blockContent2">
          <div>
            <p className="title">Viens construire la suite avec nous !</p>
            <p className="title-content">
              Solutions informatiques est en pleine transformation. Nous
              grandissons et nous avons besoin de tes idées !
            </p>
            <button className="btnMore">Voir nos offres</button>
          </div>
        </div>
      </div>
      <p className="pack-collabo">Le pack collaborateur</p>
      <div className="block">
        <div className="blockContentLast">
          <img src={collabo1} alt="" />
          <p style={style.cardDetail}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            reprehenderit?
          </p>
        </div>
        <div className="blockContentLast">
          <img src={collabo5} alt="" />
          <p style={style.cardDetail}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            reprehenderit?
          </p>
        </div>
        <div className="blockContentLast">
          <img src={collabo3} alt="" />
          <p style={style.cardDetail}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            reprehenderit?
          </p>
        </div>
        <div className="blockContentLast">
          <img src={collabo4} alt="" />
          <p style={style.cardDetail}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            reprehenderit?
          </p>
        </div>
      </div>
    </main>
  );
};

const style = {
  cardDetail: {
    padding: "20px",
    textAlign: "center",
  },
  btnMore: {
    width: "200px",
    backgroundColor: BLUE_VIOLET,
    color: WHITE,
    border: "none",
    padding: "1em 1em",
    fontSize: 20,
    cursor: "pointer",
  },
  block: {
    display: "flex",
    width: "100%",
    height: "auto",
    backgroundColor: WHITE,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: "2em 2em",
  },
  blockContent: {
    height: "400px",
    width: "400px",
    backgroundColor: GREY,
  },
  blockContentLast: {
    height: "300px",
    width: "250px",
    backgroundColor: GREY,
  },
  block2: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
    flexWrap: "wrap",
    width: "100%",
    margin: "20px 20px",
  },

  blockContent1: {
    width: "40%",
    height: "400px",
    backgroundColor: BLUE_VIOLET,
    paddingLeft: "2em",
    paddingRight: "2em",
  },
  blockContent2: {
    width: "60%",
    backgroundColor: GREY,
    height: "400px",
    padding: "2em 2em 2em 2em",
    textAlign: "center",
  },
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
    textAlign: "center",
    fontWeight: 500,
  },
};

export default rejoindreBody;
