import React from "react";
import logo from "./DHL-Logo.png";
import lasha from "./lasha.png.jpg";
import mirza from "./mirza.png.jpg";
import jano from "./jano.png.jpg";
import kniaz from "./kniaz.jpg";
import toko from "./toko.png.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/custom.css";

import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const students = [
  {
    name: "lasha",
    surname: "Gamgoneishvili",
    age: 24,
    status: "student",
    image: { lasha },
  },
  {
    name: "Mirza",
    surname: "Mirzashvili",
    age: 25,
    status: "student",
    image: { mirza },
  },
  {
    name: "Jano",
    surname: "Janelidze",
    age: 27,
    status: "student",
    image: { jano },
  },
  {
    name: "Kniaz",
    surname: "Tamoian",
    age: 31,
    status: "student",
    image: { kniaz },
  },
  {
    name: "Toko",
    surname: "Jikia",
    age: 33,
    status: "student",
    image: { toko },
  },
];

const lasha12 = [{ name: "Lasha" }, "asfsd", "asdfwsd", "adsfxwsd"];
console.log(<img src={lasha12[0]} alt="lasha"></img>); // Accessing the first element of the array
console.log(lasha12[0]);
console.log(`${lasha12[0].name.toLowerCase()}`);

export default function App() {
  return (
    <div className="section">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="DHL logo" />
    </header>
  );
}

function Section() {
  return (
    <section>
      <Images />
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <img src={logo} alt="DHL logo" />
    </footer>
  );
}

function Images() {
  const studentsList = students.map((student) => (
    <div className={`about-${student.name}`}>
      <p>{student.name}</p>
      <p>{student.surname}</p>
      <p>Age: {student.age}</p>
      <p>Status: {student.status}</p>
    </div>
  ));
  console.log(studentsList);

  return (
    <div className="img-container">
      <div className="lasha-container">
        <div className="home-sci">
          <a
            href="https://www.facebook.com/lasha.gamgoneishvili.3"
            target="_blank"
            rel="noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/lasha_.g.a._/"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="twit">
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
          </a>
        </div>
        <div className="lasha">
          <img src={lasha} alt="lasha" />
          <div className="about-lasha">
            <p>Name: Lasha</p>
            <p>surname: Gamgoneishvili</p>
            <p>Age: 24</p>
            <p>Status: student</p>
            <p>Nationality: Georgian</p>
          </div>
        </div>
      </div>
      <div className="mirza-container">
        <div className="home-sci">
          <a
            href="https://www.facebook.com/David.Davidd91"
            target="_blank"
            rel="noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://https://www.instagram.com/lasha_.g.a._/"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="twit">
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
          </a>
        </div>
        <div className="mirza">
          <img src={mirza} alt="mirza" className="mirza" />
          <div className="about-mirza">
            <p>Name: Mirza</p>
            <p>Surname: Mirzashvili</p>
            <p>Age: 25</p>
            <p>Status: student</p>
            <p>Nationality: Georgian</p>
          </div>
        </div>
      </div>
      <div className="jano-container">
        <div className="home-sci">
          <a
            href="https://www.facebook.com/J.Janelidze13"
            target="_blank"
            rel="noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/j.janelidze13/?fbclid=IwAR2bjAxAcDemedKsxeBV281e3CMP2LHqguWvsnjjE72wKpLN7d4cAvhmKQM"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="twitter.com/JanverdiJ13" className="twit">
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
          </a>
        </div>
        <div className="jano">
          <img src={jano} alt="jano" className="jano" />
          <div className="about-jano">
            <p>Name: Janverdi</p>
            <p>Surname: Janelidze</p>
            <p>Age: 27</p>
            <p>Status: student</p>
            <p>Nationality: Georgian</p>
          </div>
        </div>
      </div>
      <div className="kniaz-container">
        <div className="home-sci">
          <a
            href="https://www.facebook.com/kniaz.tamoian"
            target="_blank"
            rel="noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://https://www.instagram.com/lasha_.g.a._/"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="twit">
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
          </a>
        </div>
        <div className="kniaz">
          <img src={kniaz} alt="jano" className="kniaz" />
          <div className="about-kniaz">
            <p>Name: Kniaz</p>
            <p>Surname: Tamoian</p>
            <p>Age: 31</p>
            <p>Status: student</p>
            <p>Nationality: Georgian</p>
          </div>
        </div>
      </div>
      <div className="toko-container">
        <div className="home-sci">
          <a
            href="https://www.facebook.com/tornike.jiqia.5"
            target="_blank"
            rel="noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://https://www.instagram.com/lasha_.g.a._/"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="twit">
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
          </a>
        </div>
        <div className="toko">
          <img src={toko} alt="toko" className="toko" />
          <div className="about-toko">
            <p>Name: Tornike</p>
            <p>Surname: Jikia</p>
            <p>Age: 33</p>
            <p>Status: student</p>
            <p>Nationality: Georgian</p>
          </div>
        </div>
      </div>
    </div>
  );
}
