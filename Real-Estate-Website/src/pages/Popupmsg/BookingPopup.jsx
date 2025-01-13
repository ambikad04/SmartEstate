import React from "react";
import './BookingPopup.css'
import { Link } from "react-router-dom";


const BookingPopup = () => {
   

    return(
        <div className="containers">
            <div className="popup">
                <img src="./404-tick.png" alt="" />
                <h2>Thank You!</h2>
                <p>Booking details has been sucessfully submitted. Thanks!</p>
                <Link to='/payment/addpayment'><button type="submit" >OK</button></Link>
            </div>
        </div>
    )
}

export default BookingPopup;