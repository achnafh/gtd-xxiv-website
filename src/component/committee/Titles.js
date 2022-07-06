import React from 'react';
import "./Main.css";

const Title = ({type}) => {
    const titleList = [
        "/images/title.png",
        "/images/tops-title.png",
        "/images/maincomm-title.png",
        "/images/subcomm-title.png"
    ]

    const checkType = () => {
        if (type === "heading") {
            return titleList[0];
        } else if (type === "tops-title") {
            return titleList[1];
        } else if (type === "maincomm-title"){
            return titleList[2];
        } else if (type === "subcomm-title"){
            return titleList[3];
        }
    }

    return ( 
        <div className={type}>
            <img src={checkType()} alt="" />
        </div>
     );
}
 
export default Title;
