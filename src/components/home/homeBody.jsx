import React from "react";
import { Carousel, Card } from "antd";
import home from "../../images/home.svg";
import img1 from "../../images/mwafrika1.jpg";
import img4 from "../../images/img4.jpg";
import img6 from "../../images/image6.JPG";
import "./home.css";

import { WHITE, BLUE_VIOLET } from "../../constants/color";
const homeBody = () => {
  return (
    <main>
      <div className="banner">
        <img src={home} alt="" />
        <div className="content">
          <h2>Nous concevons le futur</h2>
          <p>
            Des dizaines d'entreprises nous font djà confiance grace aux
            services de qualité que nous offrons Rejoignez-les pour en
            experimenter !!!
          </p>
          <a href="/contact/#contact-us/">
            <button>CONTACTEZ-NOUS</button>
          </a>
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
            <img src={img1} alt="" />
            <div
              style={{
                padding: "10px 25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>FORMATION EN INFORMATIQUES</p>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, ullam.Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptate, eos.
              </h3>
              <button>Voir plus</button>
            </div>
          </div>
        </a>
        <a href="/services/#assistance">
          <div className="service">
            <img src={img1} alt="" />
            <div
              style={{
                padding: "10px 25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>ASSISTANCE ET MAINTENANCE</p>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, ullam.Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptate, eos.
              </h3>
              <button>Voir plus</button>
            </div>
          </div>
        </a>
        <a href="/services/#vente">
          <div className="service">
            <img src={img1} alt="" />
            <div
              style={{
                padding: "10px 25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>VENTES MATERIELS INFORMATIQUES</p>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, ullam.Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptate, eos.
              </h3>
              <button>Voir plus</button>
            </div>
          </div>
        </a>
        <a href="/services/#developement">
          <div className="service">
            <img src={img1} alt="" />
            <div
              style={{
                padding: "10px 25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>VENTES MATERIELS INFORMATIQUES</p>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, ullam.Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptate, eos.
              </h3>
              <button>Voir plus</button>
            </div>
          </div>
        </a>
        <a href="/services/#marketing">
          <div className="service">
            <img src={img1} alt="" />
            <div
              style={{
                padding: "10px 25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>MARKETING DIGITAL</p>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, ullam.Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptate, eos.
              </h3>
              <button>Voir plus</button>
            </div>
          </div>
        </a>
        <a href="/services/#conseil">
          <div className="service">
            <img src={img1} alt="" />
            <div
              style={{
                padding: "10px 25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>CONSEIL ET AUDIT</p>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, ullam.Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptate, eos.
              </h3>
              <button>Voir plus</button>
            </div>
          </div>
        </a>
      </div>

      <div className="target">
        <img src={img1} alt="" />
        <div className="content change">
          <h2 className="content-1">
            Voulez-vous booster la productivité professionnelle ?
          </h2>
          <p className="content-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            architecto molestiae recusandae non illum. Perferendis assumenda
            praesentium et iste magni? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, laborum.
          </p>
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel-item">
          <h1
            style={{
              textAlign: "center",
              color: "#004baf",
              fontWeight: "bolder",
              padding: "30px",
            }}
          >
            TEMOIGNAGE
          </h1>
          <Carousel
            autoplay
            interval={1000}
            className="carousel"
            showDots={false}
            arrows
          >
            <div>
              <img src={img1} alt="" />
              <h2>John Pombe</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                cupiditate aperiam, distinctio esse commodi nostrum laboriosam
                magnam quasi. Sunt, quae. Lorem ipsum dolor, sit amet
                consectetur
              </p>
            </div>
            <div>
              <img src={img4} alt="" />
              <h2>Patrick Olombe</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                cupiditate aperiam, distinctio esse commodi nostrum laboriosam
                magnam quasi. Sunt, quae. Lorem ipsum dolor, sit amet
                consectetur
              </p>
            </div>
            <div>
              <img src={img6} alt="" />
              <h2>Master B Shako</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                cupiditate aperiam, distinctio esse commodi nostrum laboriosam
                magnam quasi. Sunt, quae. Lorem ipsum dolor, sit amet
                consectetur
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="btn-service" style={{ backgroundColor: "#e2e3ff" }}>
        <a href="/services/">
          <button>Nos services</button>
        </a>
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
    // color: "black",
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
