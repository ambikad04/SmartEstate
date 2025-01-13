import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export const ViewBooking = () => {


  const [booking,setBooking]=useState({
     userId:"",
     userName:"",
     propertyId:"",
     startDate:"",
     endDate:""
  })

  const {userId} = useParams();

   useEffect(()=>{
    loadBooking()
   },[])
 
   const loadBooking = async () => {
    const result = await axios.get(`http://localhost:8081/bookings/getbookingbyuid${userId}`)
    setBooking(result.data)
   }

  return (
    <div className="background">
          <div className="booking-form">  
           <form >
              <h1>Show Details</h1>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>user id:</b>
                        {booking.userId}
                    </li>

                    <li className='list-group-item'>
                        <b>property id:</b>
                        {booking.propertyId}
                    </li>
                    
                    <li className='list-group-item'>
                        <b>username:</b>
                        {booking.userName}
                    </li>
                    
                    <li className='list-group-item'>
                        <b>start date:</b>
                        {booking.startDate}
                    </li>
                    <li className='list-group-item'>
                        <b>end date:</b>
                        {booking.endDate}
                    </li>
                </ul>
    
                   <Link  className='btn btn-primary my-2' to={'/bookingdetails'}>Back</Link>
            
            </form>
         </div>
     </div>
  )
}
