import React, {useState} from "react";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCollapse from "./MyCollapse";


export default function FAQ(props) {
    const [firstBoxOpen, setFirstBoxOpen] = useState(false);
    const [secondBoxOpen, setSecondBoxOpen] = useState(false);
    const [thirdBoxOpen, setThirdBoxOpen] = useState(false);
    const [fourthBoxOpen, setFourthBoxOpen] = useState(false);

    return (
      <main>

          <div className="faq-text">
              <p id="one">FAq</p>
              <p id="two">FAq</p>
              <p id="three">FAq</p>
              <p id="four">FAq</p>
              <p id="five">FAq</p>
              <p id="six">FAq</p>
              <div className="ellipseFaq"/>
          </div>

          {/*<img src={faq} alt="faq"/>*/}

          <div className="content-box">
              <div id="one" className="rectangle20"/>
              <div id="two" className="rectangle20"/>
              <div id="three" className="rectangle20"/>
              <div id="four" className="rectangle20"/>
              <div id="five" className="rectangle20"/>
              <div id="six" className="rectangle20"/>
              <div className="ellipseContent" />

              <div className="content-flex-container">
                  <div className="content contact-us ">
                      <p>CONTACT US</p>
                      {/*<div className="rectangle15"/>*/}
                  </div>

                  <div className="content faq-box">
                      {/*<div className="boxes-wrapper">*/}

                          <MyCollapse open={firstBoxOpen} setOpen={setFirstBoxOpen} buttonText="Click!" collapseText="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident."/>

                          <MyCollapse open={secondBoxOpen} setOpen={setSecondBoxOpen} buttonText="Click!" collapseText="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident."/>

                          <MyCollapse open={thirdBoxOpen} setOpen={setThirdBoxOpen} buttonText="Click!" collapseText="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident."/>

                          <MyCollapse open={fourthBoxOpen} setOpen={setFourthBoxOpen} buttonText="Click!" collapseText="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident."/>

                  </div>
              </div>

          </div>

      </main>
  )
}
