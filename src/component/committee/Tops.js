import React from 'react';
import "./Main.css";
import "./Tops.css";

const Tops = () => {
    const cardBG = "/images/committee/profile-background.png";
    const topsData = [
        {
            name: "Nicolas Erlando",
            major: "EEE/Year 4",
            portfol: "President",
            image:"/images/committee/photo-not-found.png",
            class:"president",
            id: 1
        },
        {
            name: "Andrew Wira",
            major: "DSAI/Year 4",
            portfol: "VP PO-LOGS",
            image:"/images/committee/photo-not-found.png",
            class:"polog",
            id: 2
        },
        {
            name: "Hagan Hototo",
            major: "NBS/Year 3",
            portfol: "VP PPIT-BFM",
            image:"/images/committee/photo-not-found.png",
            class:"ppit-bfm",
            id: 3
        },
        {
            name: "Michael Hans",
            major: "EEE/Year 4",
            portfol: "VP GL-Welfare",
            image:"/images/committee/photo-not-found.png",
            class:"gl-welfare",
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