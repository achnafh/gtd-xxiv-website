import React,{useState} from 'react';
import Cards from './Cards';
import "./Main.css";
import Title from "./Titles";
import Tops from "./Tops";
import Slider from "./Slider";

const Committee = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const profileData = [
        {
            division: "Project Officer",
            id:1, 
            maincomm: [{
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ],
            subcomm: [{
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ]},

        {
            division: "Logistics",
            id: 2, 
            maincomm: [{
                name: "Andrew Wira",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ],
            subcomm: [{
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ]},
        {
            division: "PPIT",
            id: 3, 
            maincomm: [{
                name: "Daren Nathaniel",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ],
            subcomm: [{
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ]},
        {
            division: "Welfare",
            id: 4, 
            maincomm: [{
                name: "Jason Nicholas",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ],
            subcomm: [{
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ]},
        {
            division: "Group Leader",
            id: 5, 
            maincomm: [{
                name: "Ruben Sitorus",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ],
            subcomm: [{
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ]},
        {
            division: "BFM",
            id: 6, 
            maincomm: [{
                name: "Kenzhi Iskandar",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ],
            subcomm: [{
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            },
            {
                name: "Kelvin Leo",
                major: "MSE/Year 2",
                photo: "/images/achnaf-twibbon.jpg"
            }
        ]}

    ]

    return (
    
        <div className="committee">
            <Title type = {"heading"}/>
            <Title type = {"tops-title"}/>
        
            <Tops/>

            <Slider profileData={profileData} slideIndex={slideIndex} setSlideIndex={setSlideIndex}/>

            <Title type = {"maincomm-title"}/>
            <Cards position={"maincomm"} profileData={profileData} slideIndex={slideIndex}/>
            
            <Title type = {"subcomm-title"}/>
            <Cards position={"subcomm"} profileData={profileData} slideIndex={slideIndex}/>
            
        </div>
    );
}
 
export default Committee;