import React from "react";
import "./about.css";
import Header from "./header.js";
import Content from "./content.js";
import Socials from "./socials.js";
import Sponsor from "./sponsor.js";
import Past from "./past-events.js";
export default function About(props) {
  return (
    <>
      <Header />
      <Content />
      <Socials />
      <Sponsor />
      <Past />
    </>
  );
}
