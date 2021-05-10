import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import mw from "../../images/img3.png";
import computer4 from "../../images/computer4.svg";
import computer from "../../images/computer.svg";
import formation from "../../images/formation.svg";
import assistance from "../../images/assistance.svg";
import assistance2 from "../../images/assistance2.svg";
import vente from "../../images/vente.svg";
import vente2 from "../../images/vente2.svg";
import vente3 from "../../images/vente3.svg";
import development from "../../images/development.svg";
import development2 from "../../images/development2.svg";
import computer2 from "../../images/computer2.svg";
import marketing from "../../images/marketing.svg";
import conseil from "../../images/conseil.svg";
import booster from "../../images/booster.svg";
import booster2 from "../../images/booster2.svg";
import "./home.css";

import { WHITE, BLUE_VIOLET } from "../../constants/color";
const homeBody = () => {
  return (
    <main>
      <div className="banner">
        <img src={computer} alt="" />
        <div className="content">
          <h2>Nous concevons le futur</h2>
          <p>
            Des dizaines d'entreprises nous font djà confiance grace aux
            services de qualité que nous offrons Rejoignez-les pour en
            experimenter !!!
          </p>
          <button>Register</button>
        </div>
      </div>
      <div className="first-desc">
        <div className="first1">
          <h1>Nos supports </h1>
          <p>
            Les supports ou les syllabus que nous offrons lors de la formations
            sont à jour et conforme au programme national
          </p>
        </div>
        <div className="first1">
          <h1>Lorem ipsum dolor sit amet </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eveniet quam tempora, debitis assumenda excepturi sequi nihil.
            Cumque accusamus, corporis nam iure ea amet quam non tempora ex?
            Totam, similique.
          </p>
        </div>
        <div className="first1">
          <h1>Lorem ipsum dolor sit amet </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eveniet quam tempora, debitis assumenda excepturi sequi nihil.
            Cumque accusamus, corporis nam iure ea amet quam non tempora ex?
            Totam, similique.
          </p>
        </div>
      </div>
      <div className="service-title">
        <p className="s-title">Nos services d'infogérance</p>
        <p className="s-body">
          Nous vous accompagnons sur 100% de vos problématiques informatiques
        </p>
      </div>
      <div className="second-desc">
        <a href="/services/#formation">
          <div className="service">
            <img src={formation} alt="" />
            <p>FORMATIONS EN INFORMATIQUE</p>
          </div>
        </a>
        <a href="/services/#assistance">
          <div className="service">
            <img src={assistance2} alt="" />
            <p>ASSISTANCE & MAINTENANCE</p>
          </div>
        </a>
        <a href="/services/#vente">
          <div className="service">
            <img src={vente2} alt="" />
            <p>VENTES MATERIELS INFORMATIQUES</p>
          </div>
        </a>
        <a href="/services/#developement">
          <div className="service">
            <img src={development2} alt="" />
            <p>DEVELOPPEMENT DES APPLICATIONS</p>
          </div>
        </a>
        <a href="/services/#marketing">
          <div className="service">
            <img src={marketing} alt="" />
            <p>MARKETING DIGITAL</p>
          </div>
        </a>
        <a href="/services/#conseil">
          <div className="service">
            <img src={conseil} alt="" />
            <p>CONSEIL ET AUDIT</p>
          </div>
        </a>
      </div>
      <a href="/services/">
        <div className="btn-service">
          <button>Nos services</button>
        </div>
      </a>

      <div className="target">
        <img src={booster2} alt="" />
        <div className="content">
          <h2>Voulez-vous booster la productivité professionnelle ?</h2>
          <p style={style.paragraph2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            architecto molestiae recusandae non illum. Perferendis assumenda
            praesentium et iste magni? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, laborum.
          </p>
        </div>
      </div>
    </main>
  );
};
const style = {
  paragraph1: {
    color: BLUE_VIOLET,
    fontSize: "15px",
    margin: "2em 0em",
  },
  paragraph2: {
    color: "black",
    fontSize: "15px",
    margin: "2em 0em",
  },
  paragraph3: {
    color: WHITE,
    fontSize: "45px",
    margin: "1em 0em",
  },
  paragraph4: {
    color: BLUE_VIOLET,
    fontSize: "45px",
    margin: "1em 0em",
  },
};
export default homeBody;
