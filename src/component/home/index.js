import React from "react";
import { Button } from "react-bootstrap";
import Header from "./Header";
import "./home.css";
import neonBlue from "./image/Neon Blue.png";
import neonRed from "./image/Neon Red.png";
import neonYellow from "./image/Neon Yellow.png";
import neonGreen from "./image/Neon Green.png";

export default function Home(props) {
  return (
    <div className="grafitti">
      <div>
        <Header />
      </div>
      <div className="neon-row">
        <div className="neon-item">
          <img src={neonBlue} />
        </div>
        <div className="neon-item">
          <img src={neonYellow} />
        </div>
      </div>
      <div className="neon-row">
        <div className="neon-item">
          <img src={neonGreen} />
        </div>
        <div className="neon-item">
          <img src={neonRed} />
        </div>
      </div>
      <div className="storyline"></div>
      <div className="storyline content"></div>
      <div className="anthem"></div>
      <div className="anthemContent"></div>
    </div>
  );
}
