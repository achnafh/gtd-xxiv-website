import React from "react";
import title from "./image/Sub Header.png";

export default function Storyline(props) {
  return (
    <div className="home_storyline">
      <div className="home_story_title">
        <img src={title} className="home_story_title_img"></img>
      </div>
      <div className="home_story_container">
        <p className="home_text">
          From different places, different times With a common goal in our mind
          We want to enjoy this moment while it last Have yo ever stopped and
          wonder why That now we can share a common sk So many of us with
          different childhoods Different Dreams, different lives I know now what
          the answer i I'm sure I'm gonna mis This special day when we get
          togethe As cloud drift and seasons flee We will porbably not meet And
          different lives we'll live No once we'll forget this great day we have
        </p>
      </div>
    </div>
  );
}
