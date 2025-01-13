import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const BookingList = () => {

  const [bookings,setBookings]=useState([]);

  const { userId }=useParams();

  useEffect(()=>{
    loadBookings();
  },[]);

  const loadBookings = async () =>{
    const result=await axios.get("http://localhost:8081/bookings/getall")
    setBookings(result.data);
  }

   const deleteBooking = async (userId) => {
      await axios.delete(`http://localhost:8081/bookings/deletebooking${userId}`);
      loadBookings();
   };

    return(
        <div className="container">
             <div className="py-4">
                 <h1 className = "text-center"> Booking List</h1>
                 <table className="table border shadow">
                 <thead>
                   <tr>
                     <th scope="col">Uid</th>
                     <th scope="col">Propertyid</th>
                     <th scope="col">Username</th>
                     <th scope="col">Start Date</th>
                     <th scope="col">End date</th>
                     <th scope="col">Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   {
                      bookings.map((booking,index)=>(
                        <tr>
                           <th scope="row" key={index}>{index+1}</th>
                           <td>{booking.propertyId}</td>
                           <td>{booking.userName}</td>
                           <td>{booking.startDate}</td>
                           <td>{booking.endDate}</td>
                           <td>
                              <Link 
                                className="btn btn-primary mx-2"
                                to={`/viewbooking/${booking.userId}`}
                                >View</Link>
                              <Link 
                                className="btn btn-outline-primary mx-2"
                                to={`/editbooking/${booking.userId}`}
                                >
                                Edit
                              </Link>
                              <button className="btn btn-danger mx-2"
                               onClick={()=>deleteBooking(booking.userId)}
                              >Delete</button>
                           </td>
                        </tr>
                      ))
                   }

                 </tbody>
                </table>
             </div>
        </div>
    )
}

export default BookingList;