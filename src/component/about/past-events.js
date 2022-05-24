import React from "react";
import "./about.css";
import GTD1 from "./image/GTD 1.png";
import GTD2 from "./image/GTD 2.png";
import GTD3 from "./image/GTD 3.png";
export default function Past(props) {
  return (
    <div className="general">
      <div className="past">
        <h1>PAST EVENTS</h1>
        <img class="past-image" src={GTD1} alt="" />

        <h2>GTD XXII: INSURGIO</h2>
        <img class="past-image" src={GTD2} alt="" />
        <h2>GTD XXI: INXXIGNIA</h2>
        <img class="past-image" src={GTD3} alt="" />
        <h2>GTD XXII: EXODIA</h2>
      </div>
    </div>
  );
}
