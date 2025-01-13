import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const linkStyle= {
        color: 'white',
        outline : 'none'
       }

    return(
        <section className="h-wrapper">
           <div className="flexCenter paddings innerWidth h-container">
               <a href="" style={linkStyle}>SmartEstate</a>

               <ul className="flexCenter h-menu">
                    <Link to='/userdetails' style={linkStyle}>User Details</Link>
                    <Link to='/bookingdetails' style={linkStyle}>Booking Details</Link>
                    <Link to='/property/addproperty'  style={linkStyle}>Add Property</Link>
                    <Link to='/paymentdetails' style={linkStyle}>Payment Details</Link>
                </ul>
           </div>
       </section>
    )
}

export default Navbar;