import React from "react";
import "./about.css";
import sponsor from "./image/sponsor1.png";
export default function Sponsor(props) {
  return (
    <div className="general">
      <div className="sponsor">
        <h2>CHECK OUT OUR SPONSOR</h2>
        <div className="sponsor-image">
          <img src={sponsor} alt="" />
        </div>
      </div>
    </div>
  );
}
