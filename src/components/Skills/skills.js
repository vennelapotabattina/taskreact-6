import React from "react";
import './skills.css';
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills =() =>{
    return(
        <section id = "skills">
            <span className="skillTitle">What do I do</span>
            <span className="skillDesc">I am a </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src ={UIDesign} alt ="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>front end developer</h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src = {WebDesign} alt ="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Analyst</h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src ={AppDesign} alt ="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>ML Engineer</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;