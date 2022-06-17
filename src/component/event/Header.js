import React from "react";
import "./event.css";
import image from "./image/Group (1).png";
export default function Header(props) {
  return (
    <div className="bigimage">
      <div className="overlay">
        <img className="text" src={image} alt="" />
        <h2>
          <span>GTD XXIV</span>
        </h2>
      </div>
    </div>
  );
}
