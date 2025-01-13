import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { color } from "framer-motion";

const Header = () => {


   const linkStyle= {
    color: 'white',
    outline : 'none',
   }

    return(
       <section className="h-wrapper">
           <div className="flexCenter paddings innerWidth h-container">
               <a href="" style={linkStyle}>SmartEstate</a>

               <ul className="flexCenter h-menu">
                    <Link to='/' style={linkStyle}>Home</Link>
                    <Link to='/residency' style={linkStyle}>Residencies</Link>
                    <a href="#contact"  style={linkStyle}>Contact Us</a>
                    <a href="#about"  style={linkStyle}>About us</a>
                    <Link to='/api/login'><button className="button">LogIn</button></Link>
                    <Link to='/admin'  style={linkStyle}>Admin</Link>
                </ul>
           </div>
       </section>
    )
}

export default Header;