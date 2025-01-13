import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const UserList = () => {

   const [users,setUsers]=useState([])

   const {id} = useParams()

   useEffect(() => {
     loadUsers();
   },[]);
 
   const loadUsers = async () => {
    const result =await axios.get("http://localhost:8081/api/getall")
    setUsers(result.data);
   }

   const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8081/api/deleteuser${id}`);
    loadUsers();

   }


  return (
    <div className="container">
        <div className="py-4">
           <table className="table border shadow">
             <thead>
               <tr>
                 <th>Id</th>
                 <th>Username</th>
                 <th>Password</th>
                 <th>Action</th>
               </tr>
             </thead>
              <tbody>
                {
                    users.map((user,index)=>(
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>
                            <Link 
                             className='btn btn-primary mx-2'
                             to={`/viewuser/${user.id}`}
                             >View</Link>
                            <Link
                             className='btn btn-outline-primary mx-2'
                             to={`/edituser/${user.id}`}
                             >Edit</Link>
                            <button className='btn btn-danger mx-2'
                              onClick={()=>deleteUser(user.id)}
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
