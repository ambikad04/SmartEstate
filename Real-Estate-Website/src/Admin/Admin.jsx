import React from "react";
import './Admin.css'
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import Sidebar from "./Sidebar/Sidebar";



const Admin = () => {
    return(
        <div>
          <Navbar/>
          {/* <Sidebar/> */}
          <Body/>
        </div>
    )
}

export default Admin;