import React from "react";
import "./event.css";
import Header from "./Header.js";
import Card from "./card.js";
import content from "./content.js";

function createEntry(cardValue, idx) {
  return (
    <Card
      id={cardValue.id}
      idx={idx}
      days={cardValue.days}
      const={cardValue.content}
    />
  );
}

export default function Event(props) {
  return (
    <>
      <Header />
      {content.map(createEntry)}
    </>
  );
}
