import React from "react";
import './About.css'

const About = () => {
    return(
        <section className="a-wrapper" id="about">
            <div className="paddings innerWidth flexCenter a-container">
                <div className="a-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                <div className="flexColStart a-right">
                    <span className="orangeText" >EXPLORE</span>
                    <span className="primaryText">ABOUT US - SmartEstate</span>
                    <span className="Text">
                       SmartEstate has been around in the real-estate industry since 2022, and for 2 years we have continued to provide quality and surpassing service for our valued customers. The founders, Ambika Das, Riya Das,  Shreya Parui are experienced in real-estate management with a young professional mind beneficial for research and continuous development of SmartEstate.
                       <br />
                       Welcome to SmartEstate, your trusted partner in real estate property management. At SmartEstate, we understand the importance of finding the perfect property and managing it efficiently. With years of experience in the industry, we offer comprehensive services tailored to meet your specific needs.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About;