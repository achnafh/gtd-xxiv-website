import React from "react";
import "./about.css";
import instagram from "./image/instagram.png";
import linkedin from "./image/linkedin.png";
export default function about(props) {
  return (
    <div className="general">
      <div className="socials">
        <h1>FOLLOW US ON OUR SOCIALS!</h1>
        <p>
          <img src={linkedin} alt="" />
          <h2>@pintugtd</h2>
        </p>
        <p>
          <a href="https://www.instagram.com/pintugtd/?hl=en">
            <img src={instagram} alt="" />
          </a>
          <h2>@pintugtd</h2>
        </p>
      </div>
    </div>
  );
}
