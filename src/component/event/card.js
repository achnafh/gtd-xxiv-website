import React from "react";
import "./event.css";

export default function card(props) {
  return (
    <div className="bigimage2">
      <img className="imageday" src={props.days} alt="" />
      <div className="content-event">
        {props.const.map((data) => (
          <>
            <img class="imgBx" src={data.image} alt="" />
            <div className="content-event-text">
              <h2> {data.title}</h2>
              <p>{data.description}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
