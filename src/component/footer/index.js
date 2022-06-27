import React from "react";
import "./index.css"
import pintuLogo from "./img/Pintu Logo.png"
import linkedinLogo from "./img/LinkedIn Logo Simple.png"
import instagramLogo from "./img/Instagram Logo Simple.png"

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
                  <a href="https://pintusingapura.org/">
                      <img src={pintuLogo} className="pintu-logo" alt="PINTU Logo." onClick={handleClickPintuLogo}/>
                  </a>
                  <a href="https://sg.linkedin.com/in/pintusg">
                      <img src={linkedinLogo} className="linkedin-logo" alt="Linkedin Logo."/>
                  </a>
                  <a href="https://www.instagram.com/pintugram/?hl=en">
                      <img src={instagramLogo} className="instagram-logo" alt="Instagram Logo."/>
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
