import React from "react";
import "./about.css";
import image from "./image/Group.png";
export default function Header(props) {
  return (
    <div className="about-us">
      <div className="overlay-3">
        <img className="text" src={image} alt="" />
        <h2>
          <span>GTD XXIV</span>
        </h2>
      </div>
    </div>
  );
}
