import React from "react";
import "./event.css";
import image from "./image/Group (1).png";
import schedule from "./schedule.pdf";
export default function Header(props) {
  return (
    <>
      <div className="bigimage" data-aos="zoom-out">
        <div className="overlay">
          <img className="text" src={image} alt="" />
          <h2>
            <span>GTD XXIV</span>
          </h2>
        </div>
      </div>
      <div className="event-text-div">
        <a className="event-text" href={schedule} target="_blank">
          click here to see schedule!
        </a>
      </div>
    </>
  );
}
