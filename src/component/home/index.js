import React from "react";
import Anthem from "./Anthem";
import Header from "./Header";
import Logos from "./Logos";
import Storyline from "./Storyline";
import Video from "./Video";

export default function Home(props) {
  return (
    <>
      <Header />
      <div className="home_container">
        <Logos />
        <Video url={"https://www.youtube.com/embed/M4gJUDFk2HA"} />
        <Storyline />
        <Anthem />
      </div>
    </>
  );
}
