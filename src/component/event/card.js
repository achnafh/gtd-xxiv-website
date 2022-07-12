import React from "react";
import "./event.css";

export default function card(props) {
  return (
    <div className="bigimage2">
      {props.idx == 0 ? (
        <img
          className="imageday"
          src={props.days}
          alt=""
          style={{ marginTop: "3%" }}
        />
      ) : (
        <img className="imageday" src={props.days} alt="" />
      )}
      <div className="content-event">
        {props.const.map((data) =>
          data.id % 2 == 0 ? (
            <div
              className="content-event-card"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
            >
              <img className="imgBx" src={data.image} alt="" />
              <div className="content-event-text">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </div>
          ) : (
            <div
              className="content-event-card"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
            >
              <img className="imgBx" src={data.image} alt="" />
              <div className="content-event-text">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
