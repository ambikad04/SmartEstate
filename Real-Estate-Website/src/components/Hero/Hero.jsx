import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup";
import {motion} from 'framer-motion';

const Hero = () => {
    return(
        <section className="hero-wrapper" id="Home">
             <div className="paddings innerWidth flexCenter hero-container">
                 
                 {/* left side */}
                <div className="flexColStart hero-left">
                    
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <motion.h1
                           initial={{y: "2rem", opacity: 0}}
                           animate={{y: 0, opacity: 1}}
                        >
                            Discover <br/>
                           Most Suitable <br/>Property
                        </motion.h1>
                     </div>
                        <div className="flexColStart hero-des">
                            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
                            <span className="secondaryText">Forget all difficulties in finding residence for you</span>
                        </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                </div>
                 {/* right side */}
                <div className="flexCenter hero-right">
                     <motion.div 
                     initial={{x: "7rem", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                     transition={{
                        duration: 2,
                        type: "spring"
                     }}
                     className="image-container">
                        <img src="./hero-image.png" alt="" />
                     </motion.div>
                </div>
             </div>
        </section>
    )
}

export default Hero;