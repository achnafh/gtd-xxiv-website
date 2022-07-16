import React from "react";
import neonBlue from "./image/Neon Blue.png";
import neonRed from "./image/Neon Red.png";
import neonYellow from "./image/Neon Yellow.png";
import neonGreen from "./image/Neon Green.png";
import "./home.css";

export default function Logos() {
  return (
    <div className="home_houses">
      <div className="home_house_row">
        <div
          className="home_house_per"
          data-aos="fade-down-right"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={neonBlue} className="house_img" />
          <div className="home_house_per_hover">
            <div className="home_house_per_hover_content">
              <p className="home_text">
                Harley Quinn
                <br />A former psychiatric intern who was fascinated in learning
                the psychology of asylum people. After having an abusive affair
                with a manipulative inmate, Harley Quinn were left in
                unpredictable mental mood swings. Many people underestimated her
                after looking at her abnormal behaviour, but Kingpin sees her as
                a great addition to the arsenal as she grew more violent than
                ever
              </p>
            </div>
          </div>
        </div>
        <div
          className="home_house_per"
          data-aos="fade-down-left"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={neonYellow} className="house_img" />
          <div className="home_house_per_hover">
            <div className="home_house_per_hover_content">
              <p className="home_text">
                Reversed Flash
                <br />
                an ex-professor who turned into a criminal after a bitter
                rejection from the scientific community regarding his claims
                that he can recreate the formula used by The Flash to obtain his
                super speed. Despite this, the formula he recreated was
                temporary, and he started to seek help from other criminals and
                encountered Kingpin. After promising vengeance, Kingpin hired
                him and uses the formula to bolster his forces
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home_house_row">
        <div
          className="home_house_per"
          data-aos="fade-up-right"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={neonGreen} className="house_img" />
          <div className="home_house_per_hover">
            <div className="home_house_per_hover_content">
              <p className="home_text">
                Poison Ivy
                <br />A former PhD graduate and was once a world-renowned
                botanist. However, her dark past left her being an intoxicated
                victim of a brutal experiment conducted by one of her close
                acquaintances, which made her able to control all living plants.
                Capitalizing on her rage of betrayal, Kingpin adopted her to the
                team and has since become a force of nature
              </p>
            </div>
          </div>
        </div>
        <div
          className="home_house_per"
          data-aos="fade-up-left"
          data-aos-anchor-placement="center-bottom"
        >
          <img src={neonRed} className="house_img" />
          <div className="home_house_per_hover">
            <div className="home_house_per_hover_content">
              <p className="home_text">
                Peacemaker
                <br />
                the embodiment of peak human physical conditions. When the world
                turned rogue, he started to lose his sense of justice and
                decided to join Kingpin in his conquest to rule the underworld.
                Equipped with super strength, state-of-the-art weaponry, and
                lethal marksmanship, all enemies trembled before him as he can
                subdue each of them with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
