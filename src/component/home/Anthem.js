import React from "react";
import title from "./image/Anthem.png";

export default function Anthem() {
  return (
    <div className="home_anthem">
      <div className="home_anthem_title">
        <img src={title} className="home_anthem_title_img"></img>
      </div>
      <div className="home_anthem_container">
        <p className="home_text">Verse</p>
        <p className="home_text">
          From different places, different times <br />
          With a common goal in our minds <br />
          We want to enjoy this moment while it lasts <br />
          Have you ever stopped and wonder why <br />
          That now we can share a common sky <br />
          So many of us with different childhoods <br />
          Different dreams, different lives <br />
        </p>
        <p className="home_text">Chorus</p>
        <p className="home_text">
          I know now what the answer is <br />
          I'm sure I'm gonna miss <br />
          This special day when we get together <br />
          As clouds drift and seasons flee <br />
          We will porbably not meet <br />
          And different lives we'll lives <br />
          No once we'll forget this great day we have <br />
        </p>
        <iframe
          width="80%"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/455672094&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>
    </div>
  );
}
