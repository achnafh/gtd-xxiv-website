import React from "react";
import "./about.css";
import instagram from "./image/instagram.png";
import linkedin from "./image/linkedin.png";
export default function about(props) {
  return (
    <div className="socials">
      <h1>FOLLOW US ON OUR SOCIALS!</h1>
      <div className="list_socials">
        <div className="linkedin">
          <a href="https://www.linkedin.com/company/pintu-gtd/" target="_blank">
            <img src={linkedin} alt="" />
          </a>
        </div>
        <div className="instagram">
          <a href="https://www.instagram.com/pintugtd/?hl=en" target="_blank">
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
