import React from "react";
import title from "./image/Sub Header.png";

export default function Storyline(props) {
  return (
    <div className="home_storyline">
      <div className="home_story_title">
        <img src={title} className="home_story_title_img"></img>
      </div>
      <div className="home_story_container" data-aos="fade-left">
        <p className="home_text">
          After subduing the entire criminal underworld, Kingpin ruled with an
          iron fist and has been notoriously known for his violent reign.
          However, as his time is coming to an end, he held an open contest for
          his fellow companions to determine the next ruler of the underworld.
          <br />
          <br />
          Or at least, that's what he wants us to believe...
        </p>
      </div>
    </div>
  );
}
