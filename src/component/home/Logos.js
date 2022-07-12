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
        <div
          className="home_house_per"
          data-aos="fade-down-right"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={neonBlue} className="house_img" />
          <div className="home_house_per_hover">
            <div className="home_house_per_hover_content">
              <p className="home_text">Harley Quinn</p>
            </div>
          </div>
        </div>
        <div
          className="home_house_per"
          data-aos="fade-down-left"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={neonYellow} className="house_img" />
          <div className="home_house_per_hover">
            <div className="home_house_per_hover_content">
              <p className="home_text">Reversed Flash</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home_house_row">
        <div
          className="home_house_per"
          data-aos="fade-up-right"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={neonGreen} className="house_img" />
          <div className="home_house_per_hover">
            <div className="home_house_per_hover_content">
              <p className="home_text">Poison Ivy</p>
            </div>
          </div>
        </div>
        <div
          className="home_house_per"
          data-aos="fade-up-left"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={neonRed} className="house_img" />
          <div className="home_house_per_hover">
            <div className="home_house_per_hover_content">
              <p className="home_text">Peacemaker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
