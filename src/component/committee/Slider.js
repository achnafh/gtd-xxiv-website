import React from 'react';
import "./Main.css";
import "./Slider.css";
import "./Titles.css";
import BtnSlide from "./BtnSlide";

const Slider = ({profileData, slideIndex, setSlideIndex}) => {
    const moveDot = (index) => {
        setSlideIndex(index);
        if (window.innerWidth <= 800) {
            window.scrollTo({
                top:1650,
                behavior: "smooth"
            });
        }else {
            window.scrollTo({
                top:1010,
                behavior: "smooth"
            });
        };
    };
    const nextSlide = () => {
        if (slideIndex !== profileData.length){
            setSlideIndex(slideIndex + 1);
            if (window.innerWidth <= 800) {
                window.scrollTo({
                    top:1650,
                    behavior: "smooth"
                });
            }else {
                window.scrollTo({
                    top:1010,
                    behavior: "smooth"
                });
            };
        } else if (slideIndex === profileData.length){
            setSlideIndex(1);
            if (window.innerWidth <= 800) {
                window.scrollTo({
                    top:1650,
                    behavior: "smooth"
                });
            }else {
                window.scrollTo({
                    top:1010,
                    behavior: "smooth"
                });
            };
        }
    };
    const prevSlide = () => {
        if (slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
            if (window.innerWidth <= 800) {
                window.scrollTo({
                    top:1650,
                    behavior: "smooth"
                });
            }else {
                window.scrollTo({
                    top:1010,
                    behavior: "smooth"
                });
            };
        } else if (slideIndex === 1){
            setSlideIndex(profileData.length);
            if (window.innerWidth <= 800) {
                window.scrollTo({
                    top:1650,
                    behavior: "smooth"
                });
            }else {
                window.scrollTo({
                    top:1010,
                    behavior: "smooth"
                });
            };
        }
    };

    
    return ( 
    
        <div className="portfol-title">
            <div className="portfol-title-flex">
                <BtnSlide moveSlide = {prevSlide} direction={"prev"}/>
                {profileData.map((portfol)=>(
                    <div className={slideIndex === portfol.id ? "portfol-title-division" : "portfol-title-disabled"}>
                        <h1>{portfol.division}</h1>
                    </div>
                ))}
                
                <BtnSlide moveSlide = {nextSlide} direction={"next"}/>
            </div>

            <div className="dot-container">
                {Array.from({length:6}).map((item, index)=>(
                    <div 
                    onClick={ () => moveDot(index + 1) }
                    className={slideIndex === index + 1 ? "dot dot--active" : "dot"}
                    ></div>
                ))}
            </div>
        </div> 
);
}
 
export default Slider;