import React from "react";

const ForgotPassword = () => {
    return(
        <div className="auth-form-container">
           <form className="register-form">
                <h2>Forgot Password</h2>
               <label htmlFor="email">Email:</label>
               <input type="email" placeholder="Enter your email" required />
               <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export  default ForgotPassword;