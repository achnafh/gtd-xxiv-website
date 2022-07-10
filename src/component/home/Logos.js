import React from "react";
import neonBlue from "./image/Neon Blue.png";
import neonRed from "./image/Neon Red.png";
import neonYellow from "./image/Neon Yellow.png";
import neonGreen from "./image/Neon Green.png";
import "./home.css";

export default function Logos() {
  return (
    <div className="home_houses">
      <div className="home_house_row">
        <div className="home_house_per">
          <img src={neonBlue} className="house_img" />
        </div>
        <div className="home_house_per">
          <img src={neonYellow} className="house_img" />
        </div>
      </div>
      <div className="home_house_row">
        <div className="home_house_per">
          <img src={neonGreen} className="house_img" />
        </div>
        <div className="home_house_per">
          <img src={neonRed} className="house_img" />
        </div>
      </div>
    </div>
  );
}
