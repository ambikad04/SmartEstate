import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import axios from 'axios';
import { sliderSettings } from "../../utils/common";
import { Link } from "react-router-dom";

const ShowProperty = () => {
   
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const response = await axios.get('http://localhost:8081/property/getall');
            setProperties(response.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
            // Handle error (e.g., display error message to user)
        }
    };

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
                      properties.map((property, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={`data:image/jpeg;base64,${property.image}`} alt={property.name} style={{ maxWidth: '600px',borderRadius: '10px' }} />

                                 <span className="secondaryText r-price">
                                     <span style={{color:"orange"}}>$</span>
                                     <span>{property.price}</span>
                                 </span>

                                 <span className="primaryText">{property.name}</span>
                                 <span className="secondaryText">{property.details}</span>
                                 <Link to='/bookings/addbooking'>
                                     <button className="book">Book Now</button>
                                 </Link>
                            </div>
                        </SwiperSlide>
                      ))
                  }
               </Swiper>
           </div>
       </section> 
    );
};


export default ShowProperty;

const SliderButtons = () => {
    const swiper = useSwiper();
   return(
       <div className="flexCenter r-buttons">
          <button onClick={() => swiper.slidePrev()}>&lt;</button>
          <button onClick={() => swiper.slideNext()}>&gt;</button>
       </div>
   );
};