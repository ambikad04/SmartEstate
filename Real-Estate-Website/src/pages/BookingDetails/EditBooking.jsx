import React, { useEffect, useState } from "react";
import './Booking.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



const EditBooking = () => {

    const [data, setData] = useState({});

    const {userId} = useParams()

    const navigate = useNavigate()
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8081/bookings/updatebooking`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    } );
    const result = await response.json();
    console.log(result);
    navigate('/bookingdetails')
 }
 useEffect(()=>{
    loadData();
 },[]);

 const loadData = async () => {
    const result = await axios.get(`http://localhost:8081/bookings/updatebooking`);
    setData(result.data)
 }
     

    return(
        <div className="background">
          <div className="booking-form">  
           <form onSubmit={handleSubmit}>
              <h1>Edit Booking</h1>
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
    
                   <button type="submit" >Save</button>
            
            </form>
         </div>
     </div>

 
    )
}

export default EditBooking;