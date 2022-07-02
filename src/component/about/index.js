import React from "react";
import "./about.css";
import Header from "./header.js";
import Content from "./content.js";
import Socials from "./socials.js";
import Sponsor from "./sponsor.js";
import Past from "./past-events.js";
import card from "./events-content.js";

function createEntry2(value) {
  return (
    <Past
      id={value.id}
      title={value.title}
      image={value.image}
      flip={value.flip}
      name={value.name}
    />
  );
}

export default function About(props) {
  return (
    <>
      <Header />
      <Content />
      <Socials />
      <Sponsor />
      {card.map(createEntry2)}
    </>
  );
}
