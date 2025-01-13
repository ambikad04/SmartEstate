import React, {useState} from "react";
import './Login.css';
import { FaUser,FaLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

 const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try 
        {
            const response = await axios.post('http://localhost:8081/api/login', { username, password });
                      setMessage('login successful')
            //console.log(response.data); // Handle successful login

            if (response.data == 'Login successful')
            {
                sessionStorage.setItem('id', username);
                navigate('/');
            }
        
        } catch (error) {
            //console.error('Login failed:', error.response.data);

            e.preventDefault();
            setMessage('Login failed!');
        }    
    };

    return(
         <div className="wrapper">
            <form className="wrapper-container" onSubmit={handleSubmit}>
            {message && <p>{message}</p>}

                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <FaUser className="icons"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <FaLock className="icons"/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <Link to='/forgot'>Forgot Password?</Link>
                </div>

                 <button type="submit">Login</button>

                 <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                 </div>
            </form>
         </div>

    )
}

export default Login;