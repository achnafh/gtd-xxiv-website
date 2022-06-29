import React from "react";
import "./about.css";

export default function Past(props) {
  return (
    <div className="general">
      <div className="past">
        <h1>PAST EVENTS</h1>
        <div class="fullwrap">
          <img class="past-image" src={props.image} alt="" />
          <div class="fullcap">
            <p class="img__description">{props.flip}</p>
          </div>
        </div>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}
