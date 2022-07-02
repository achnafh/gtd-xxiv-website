import React from "react";
import "./about.css";
import sponsor from "./image/sponsor1.png";
export default function Sponsor(props) {
  return (
    <div className="general">
      <div className="sponsor">
        <h2>CHECK OUT OUR SPONSOR</h2>
        <div class="fullwrap">
          <img src={sponsor} alt="" className="sponsor-image-img" />
          <a href="https://www.tanotofoundation.org/" target="_blank">
            <div class="fullcap">
              <p class="img__description" style={{ fontSize: 30 }}>
                Check me out!
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
