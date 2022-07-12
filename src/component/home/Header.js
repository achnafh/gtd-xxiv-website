import React from "react";
import "./home.css";
import group from "./image/Group.png";

export default function Header(props) {
  return (
    <div className="home_header" data-aos="zoom-out">
      <img src={group} alt="" className="home_title" />
    </div>
  );
}
