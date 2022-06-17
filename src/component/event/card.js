import React from "react";
import "./event.css";

export default function card(props) {
  return (
    <div className="bigimage2">
      <div className="overlay2">
        <img className="imageday" src={props.days} alt="" />

        <div className="content-event">
          <img class="imgBx" src={props.image1} alt="" />
          <div className="content-event-text">
            <h2> {props.title1}</h2>
            <p>{props.content1}</p>
          </div>
        </div>
        <div className="content-event">
          <img class="imgBx" src={props.image2} alt="" />
          <div className="content-event-text">
            <h2> {props.title2}</h2>
            <p>{props.content2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
