import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import "./Main.css";
import Title from "./Titles";
import Tops from "./Tops";
import Slider from "./Slider";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const Committee = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    const element = document.getElementById("portfol-title");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="committee" data-aos="zoom-out-up">
        <Title type={"heading"} />
        <Title type={"tops-title"} />

        <Tops />

        <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex} />

        <Title type={"maincomm-title"} />
        <Cards position={"maincomm"} slideIndex={slideIndex} />

        <Title type={"subcomm-title"} />
        <Cards position={"subcomm"} slideIndex={slideIndex} />
      </div>
      <div
        className={showTopBtn ? "top-to-btm-active" : "top-to-btm"}
        onClick={goToTop}
      >
        <ArrowCircleUpIcon
          className="icon-position icon-style"
          fontSize="large"
        />
      </div>
    </>
  );
};

export default Committee;
