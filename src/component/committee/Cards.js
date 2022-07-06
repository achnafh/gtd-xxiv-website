import React from 'react';
import "./Main.css";
import "./Cards.css";

const Cards = ({profileData,position, slideIndex}) => {
    const cardBG = "/images/profile-background.png";
    const checkMaincomm = (position) => position.startsWith("m");

    // const profileData = [
    //     {
    //         division: "PPIT",
    //         id:1, 
    //         maincomm: [{
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         }
    //     ],
    //         subcomm: [{
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         }
    //     ]},

    //     {
    //         division: "Welfare",
    //         id: 2, 
    //         maincomm: [{
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         }
    //     ],
    //         subcomm: [{
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         }
    //     ]},
    //     {
    //         division: "Group Leader",
    //         id: 3, 
    //         maincomm: [{
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         }
    //     ],
    //         subcomm: [{
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         },
    //         {
    //             name: "Kelvin Leo",
    //             major: "MSE/Year 2",
    //             photo: "/images/achnaf-twibbon.jpg"
    //         }
    //     ]}
    // ]

    return ( 
        <div className={`${checkMaincomm(position) ? "maincomm-container" : "subcomm-container"}`}>
            {profileData.map((portfol)=>(
                <section className={`${portfol.id === slideIndex? `${position} active` : `${position}`}`} key={portfol.id}>
                    {portfol[`${position}`].map((person)=>(
                        <div className="card">
                            <img src={cardBG} alt="" />
                            <div className="overlay"></div>
                                <div className="photo">
                                    <img src={person.photo} alt="" />
                                </div>

                                <div className="content">
                                    <h2>{person.name}</h2>
                                    <p>{person.major}</p>
                                    <p>Position</p>
                                    <p>{`${portfol.division}`}</p>
                                </div>
                        </div>
                    ))}
                </section>
                ))}
        </div>
     );
}
 
export default Cards;