import React from "react";
import "./Main.css";
import "./Cards.css";
import profileData from "./Database";

const Cards = ({ position, slideIndex }) => {
  const cardBG = "/images/committee/profile-background.png";
  const checkMaincomm = (position) => position.startsWith("m");
  console.log(slideIndex);

  return (
    <div
      className={`${
        checkMaincomm(position) ? "maincomm-container" : "subcomm-container"
      }`}
    >
      <section className={`${position} active`}>
        {profileData[slideIndex - 1][`${position}`].map((person) => (
          <div className="card">
            <img src={cardBG} alt="" />
            <div className="overlay-card"></div>
            <div className="photo">
              <img src={person.photo} alt="" />
            </div>

            <div className="content">
              <h2>{person.name}</h2>
              <p>{person.major}</p>
              <p>Position</p>
              <p>{`${profileData[slideIndex - 1].division}`}</p>
            </div>
          </div>
        ))}
      </section>
      ))
    </div>
  );
};

export default Cards;
