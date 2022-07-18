import React from "react";
import Trailer from "./image/Trailer.png";
import "./home.css";

export default function Video(props) {
  return (
    <>
      <img src={Trailer} className="home_story_title_img" />
      <div
        className="home_video_container"
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
      >
        <iframe
          src={props.url}
          title="video"
          className="home_video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </>
  );
}
