import React from "react";
import bg from "./img/suicide-squad-typography-hd 2.png"
import './index.css'
// import './test.css'

export default function FAQ(props) {
  return (
      <main>
          <div className="ellipseFaq"/>
          <div className="rectangleFaq"/>

          <div className="ellipseContent" />
          <div className="rectangleContent" />

          <div className="faq-text">
              <p id="one">FAq</p>
              <p id="two">FAq</p>
              <p id="three">FAq</p>
              <p id="four">FAq</p>
              <p id="five">FAq</p>
              <p id="six">FAq</p>
          </div>

          <div className="content-box">
              <div id="one" className="rectangle20"/>
              <div id="two" className="rectangle20"/>
              <div id="three" className="rectangle20"/>
              <div id="four" className="rectangle20"/>
              <div id="five" className="rectangle20"/>


              <div className="content-wrapper">
                  <div className="content">
                      <div className="contact-us">
                          <p>CONTACT US</p>
                          {/*<div className="rectangle15"/>*/}
                      </div>

                      <div className="faq">
                          <li>
                              <ul>when will I get paid</ul>
                              <ul>when will covid end</ul>
                              <ul>how </ul>
                              <ul>bangke </ul>
                          </li>
                      </div>
                  </div>
              </div>

          </div>
      </main>


  )
}
