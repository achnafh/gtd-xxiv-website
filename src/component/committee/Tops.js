import React from 'react';
import "./Main.css";
import "./Tops.css";

const Tops = () => {
    const cardBG = "/images/profile-background.png";
    const topsData = [
        {
            name: "Kelvin Leo",
            major: "MSE/Year 2",
            portfol: "President",
            image:"/images/achnaf-twibbon.jpg",
            class:"president",
            id: 1
        },
        {
            name: "Hagan Hatoto",
            major: "NBS/Year 3",
            portfol: "POLOGS",
            image:"/images/achnaf-twibbon.jpg",
            class:"polog",
            id: 2
        },
        {
            name: "Jason Nicholas",
            major: "CBE/Year 3",
            portfol: "PPIT-Welfare",
            image:"/images/achnaf-twibbon.jpg",
            class:"ppit-welfare",
            id: 3
        },
        {
            name: "Daren Nathaniel",
            major: "CBE/Year 3",
            portfol: "GL-BFM",
            image:"/images/achnaf-twibbon.jpg",
            class:"gl-bfm",
            id: 4
        }
    ]

    return ( 
    <section className='tops'>
    {topsData.map((profile) =>(
        <div className={`card ${profile.class} tops-style`} key={profile.id}>
            <img src={cardBG} alt="" />
            <div className="overlay"></div>
            <div className="photo">
                <img src={profile.image} alt="" />
            </div>
            <div className="content">
                <h2>{profile.name}</h2>
                <p>{profile.major}</p>
                <p>Position</p>
                <p>{profile.portfol}</p>
            </div>
        </div>
    ))}
</section> );
}
 
export default Tops;