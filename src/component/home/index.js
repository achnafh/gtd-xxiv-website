import React, { useEffect } from "react";
import Anthem from "./Anthem";
import Header from "./Header";
import Logos from "./Logos";
import Storyline from "./Storyline";
import Video from "./Video";

export default function Home(props) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="home_container">
        <Logos />
        <Video url={"https://www.youtube.com/embed/bIaX8E-FCuk"} />
        <Storyline />
        <Anthem />
      </div>
    </>
  );
}
