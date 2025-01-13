 import React, { useState } from "react";
import './Booking.css';
import { useNavigate } from "react-router-dom";


const Booking = () => {

    const [data, setData] = useState({});
    const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8081/bookings/addbooking', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);

    navigate('/bookingpopup')
 }

     

    return(
        <div className="background">
          <div className="booking-form">  
           <form onSubmit={handleSubmit}>
              <h1>Booking Details</h1>
                <label>User ID:</label>
                <input type="text" placeholder="User Id" onChange={e => setData({...data, userId: e.target.value})} required/>

                <label>Property ID:</label>
                <input type="text" placeholder="Property Id" onChange={e => setData({...data, propertyId: e.target.value})} required/>
                
                <label>User Name:</label>
                <input type="text" placeholder="User Name" onChange={e => setData({...data, userName: e.target.value})} required/>

                

                <label>Start Date:</label>
                <input type="date" onChange={e => setData({...data, startDate: e.target.value})} required/>

                <label>End Date:</label>
                <input type="date" onChange={e => setData({...data, endDate: e.target.value})} required/>
    
                   <button type="submit" >Book Now</button>
            
            </form>
         </div>
     </div>

 
    )
}

export default Booking;