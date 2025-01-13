import React from "react";
import './Sidebar.css'
import { MdDashboard, MdPayment, MdAccountCircle } from "react-icons/md";
import { FaRegUser, FaStoreAlt } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";


const Sidebar = () => {
    return(
        <div className="sidebar">
             <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        < MdDashboard className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <FaRegUser className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <FaStoreAlt className="icon" />
                        <span>Booking</span>
                    </li>
                    <li>
                        <FaStoreAlt className="icon" />
                        <span>Property</span>
                    </li>
                    <li>
                        <MdPayment className="icon" />
                        <span>Payment</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <MdAccountCircle className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <IoExitOutline className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
               </div>
        </div>
           
    )
}

export default Sidebar;