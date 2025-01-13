import React from 'react'
import { useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ViewUser = () => {
    const [user,setUser]=useState({
        id:"",
        username:"",
        password:"",
     })
   
     const {id} = useParams();
   
      useEffect(()=>{
       loadUser()
      },[])
    
      const loadUser = async () => {
       const result = await axios.get(`http://localhost:8081/api/getuserbyid${id}`)
       setUser(result.data)
      }
   
     return (
       <div className="background">
             <div className="booking-form">  
              <form >
                 <h1>Show Details</h1>
                   <ul className='list-group list-group-flush'>
                       <li className='list-group-item'>
                           <b>id:</b>
                           {user.id}
                       </li>
                       <li className='list-group-item'>
                           <b>username:</b>
                           {user.username}
                       </li>
                       <li className='list-group-item'>
                           <b>password:</b>
                           {user.password}
                       </li>
                   </ul>
       
                      <Link  className='btn btn-primary my-2' to={'/userdetails'}>Back</Link>
               
               </form>
            </div>
        </div>
     )
}

export default ViewUser;
