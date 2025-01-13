import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

 const Register = () => {
    return(
        <div className="auth-form-container">
           <form className="register-form">
                <h2>Register</h2>
               <label htmlFor="name">UserName:</label>
               <input type="name" placeholder="Enter your name" id="name" name="name"/>
               <label htmlFor="email">Email:</label>
               <input type="email" placeholder="Enter your email Id" id="email" name="email"/>
               <label htmlFor="password">Password:</label>
               <input type="password" placeholder="Enter password" id="password" name="password"/>
               <div className="remember">
                <label><input type="checkbox" />I agree to the terms & condition</label>
                </div>
                <button type="submit" >Register</button>
                
                <button className="link-btn">Already have an account? <Link to='/api/Login'>Login here</Link></button>
           </form>  
            
        </div>

    )
}

export default Register;