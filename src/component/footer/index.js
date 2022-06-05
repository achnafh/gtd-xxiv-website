import React from "react";
import "./index.css"
import pintuLogo from "./img/Pintu Logo.png"
import linkedinLogo from "./img/LinkedIn logo.png"
import instagramLogo from "./img/Instagram Logo.png"

export default function Footer(props) {
    const handleClickPintuLogo = () => {
        
    }

    return (
      <div className="footer">
          <div className="flex-container">
              <div className="box copyright">
                  <p>Copyright © 2021 PINTU & GTD. All Rights Reserved.</p>
              </div>
              <div className="box image-links">
                  <a href="https://www.google.com/">
                      <img src={pintuLogo} className="logo pintu-logo" alt="PINTU Logo. Image failed to load." onClick={handleClickPintuLogo}/>
                  </a>
                  <a href="https://sg.linkedin.com/in/pintusg">
                      <img src={linkedinLogo} className="logo linkedin-logo" alt="Linkedin Logo. Image failed to load."/>
                  </a>
                  <a href="https://www.instagram.com/pintugram/?hl=en">
                      <img src={instagramLogo} className="logo instagram-logo" alt="Instagram Logo. Image failed to load."/>
                  </a>
              </div>
              <div className="box special-thanks">

                <p className="special-thanks-to">Special thanks to the developer team:</p>
                <p className="gtd-it">GTD IT</p>

                {/*<p>Special thanks to the developer team: GTD IT</p>*/}
                {/*<p>Special thanks to the developer team: &nbsp;  <span className="gtd-it"> GTD IT</span></p>*/}
              </div>
          </div>
      </div>
    );
}
