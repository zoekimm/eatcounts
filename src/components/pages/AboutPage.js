import React from "react"; 
import './Page.css';

function AboutPage() {
    return (
        <div className = "about-container">
            <div className = "about-title">
            About EatCounts
            </div>
            <div className = "home-info">
                <div className = "home-info-black">"You are</div>
                <div className = "home-info-red">  what you eat"</div>
            </div>
            <div className = "home-picture">
            <img alt="app-logo" className="app-logo" src= "./EatCountsLogo_noText.png" />
            </div>
        </div>
    );
};


export default AboutPage;
