import React, {useEffect, useState} from "react";
import './Login.css';
import { FaUser,FaLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


 const EditUser = () => {

    const [data, setData] = useState({});

    const navigate = useNavigate()

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8081/api/updateuser`, {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        } );
        const result = await response.json();
        console.log(result);
        navigate('/userdetails')
     }

    useEffect(() => {
        loadData();
    },[]);

     const loadData = async () => {
        const result = await axios.get(`http://localhost:8081/api/updateuser`);
        setData(result.data)
     }

    return(
         <div className="wrapper">
            <form className="wrapper-container" onSubmit={handleSubmit}>
              <h1>Edit User</h1>
              <div className="input-box">
                    <input type="text" placeholder="id" onChange={e => setData({...data, id: e.target.value})}  required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Username" onChange={e => setData({...data, username: e.target.value})}  required/>
                    <FaUser className="icons"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})}  required/>
                    <FaLock className="icons"/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>

                 <button type="submit">Save</button>

                 <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                 </div>
            </form>
         </div>
    )
    
}

export default EditUser;