import React from "react";
 import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from "../../utils/common";
import { Link } from "react-router-dom";


const Residencies = () => {
    
    return(
       <section className="r-wrapper" id="residencies">
           <div className="paddings innerWidth r-container">
               <div className="r-head flexColStart">
                  <span className="orangeText">Best Choices</span>
                  <span className="primaryText">Popular Residencies</span>
               </div>

               <Swiper {...sliderSettings}>
                   <SliderButtons/>
                  {
                      data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.images} alt="home" />

                                 <span className="secondaryText r-price">
                                     <span style={{color:"orange"}}>$</span>
                                     <span>{card.prices}</span>
                                 </span>

                                 <span className="primaryText">{card.names}</span>
                                 <span className="secondaryText">{card.detail}</span>
                                 <Link to='/bookings/addbooking'><button className="book">Book Now</button></Link>
                            </div>
                        </SwiperSlide>
                      ))
                  }
               </Swiper>
           </div>
       </section> 
    );
};

export default Residencies;

const SliderButtons = () => {
     const swiper =  useSwiper();
    return(
        <div className="flexCenter r-buttons">
           <button onClick={()=> swiper.slidePrev()}>&lt;</button>
           <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};