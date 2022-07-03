import React from "react";
import "./home.css";
import group from "./image/Group.png";

export default function Header(props) {
  return (
    <div className="home">
      <div className="overlay-3">
        <img src={group} alt="" />
      </div>
    </div>
  );
}
