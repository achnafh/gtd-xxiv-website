import React from "react";
import "./about.css";
import GTD1 from "./image/GTD 1.png";
import GTD2 from "./image/GTD 2.png";
import GTD3 from "./image/GTD 3.png";
export default function Past(props) {
  return (
    <div className="general">
      <div className="past">
        <h1>PAST EVENTS</h1>
        <div class="fullwrap">
          <img class="past-image" src={GTD1} alt="" />
          <div class="fullcap">
            <p class="img__description">
              After the seemingly everlasting territorial disputes and
              manslaughters came to an end, the Godfather subdivided the newly
              established nation into four specialized semi-autonomous districts
              each ruled by a district leader chosen from those of the upper
              echelons. Alas, it seems that recently, our nation has yet been
              plagued with turmoil. It all began when a series of misfortunes
              struck each of the four districts, at too perfect timing for us to
              regard them as coincidental. Recruits, we need you to safeguard
              our hard-earned peace. . ..
            </p>
          </div>
        </div>

        <h2>GTD XXII: INSURGIO</h2>
        <div class="fullwrap">
          <img class="past-image" src={GTD2} alt="" />
          <div class="fullcap">
            <p class="img__description">
              After the seemingly everlasting territorial disputes and
              manslaughters came to an end, the Godfather subdivided the newly
              established nation into four specialized semi-autonomous districts
              each ruled by a district leader chosen from those of the upper
              echelons. Alas, it seems that recently, our nation has yet been
              plagued with turmoil. It all began when a series of misfortunes
              struck each of the four districts, at too perfect timing for us to
              regard them as coincidental. Recruits, we need you to safeguard
              our hard-earned peace. . .
            </p>
          </div>
        </div>
        <h2>GTD XXI: INXXIGNIA</h2>
        <div class="fullwrap">
          <img class="past-image" src={GTD3} alt="" />
          <div class="fullcap">
            <p class="img__description">
              After the seemingly everlasting territorial disputes and
              manslaughters came to an end, the Godfather subdivided the newly
              established nation into four specialized semi-autonomous districts
              each ruled by a district leader chosen from those of the upper
              echelons. Alas, it seems that recently, our nation has yet been
              plagued with turmoil. It all began when a series of misfortunes
              struck each of the four districts, at too perfect timing for us to
              regard them as coincidental. Recruits, we need you to safeguard
              our hard-earned peace. . .
            </p>
          </div>
        </div>
        <h2>GTD XXII: EXODIA</h2>
      </div>
    </div>
  );
}
