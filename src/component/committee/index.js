import React,{useState} from 'react';
import Cards from './Cards';
import "./Main.css";
import Title from "./Titles";
import Tops from "./Tops";
import Slider from "./Slider";

const Committee = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    return (
    
        <div className="committee">
            <Title type = {"heading"}/>
            <Title type = {"tops-title"}/>
            
            <Tops/>

            <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex}/>

            <Title type = {"maincomm-title"}/>
            <Cards position={"maincomm"}  slideIndex={slideIndex}/>
            
            <Title type = {"subcomm-title"}/>
            <Cards position={"subcomm"} slideIndex={slideIndex}/>
            
        </div>
    );
}
 
export default Committee;