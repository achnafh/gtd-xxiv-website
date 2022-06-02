import React from "react";
import "./event.css";
import Header from "./Header.js";
import Card from "./card.js";
import content from "./content.js";

function createEntry(cardValue) {
  return (
    <Card
      id={cardValue.id}
      days={cardValue.days}
      image1={cardValue.image1}
      title1={cardValue.title1}
      content1={cardValue.content1}
      image2={cardValue.image2}
      title2={cardValue.title2}
      content2={cardValue.content2}
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
