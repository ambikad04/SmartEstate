import React, { useState } from "react";
import './Payment.css'
import { useNavigate } from "react-router-dom";


const Payment = () => {

   const [data, setData] = useState({});
   const navigate = useNavigate()

   const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:8081/payment/addpayment', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      console.log(result);

      navigate('/paymentpopup')

  }

    return(
      <div className="backgrounds">
       <div className="payment-form">  
       <form onSubmit={handleSubmit}>
          <h1>Payment Details</h1>
            <label>Full Name:</label>
            <input type="text" placeholder="Enter name" onChange={e => setData({...data, name: e.target.value})}   required/>
            
            <label>Email:</label>
            <input type="text" placeholder="Enter email" onChange={e => setData({...data, email: e.target.value})} required/>

            <label>City:</label>
            <input type="text" placeholder="Enter city" onChange={e => setData({...data, city: e.target.value})} required/>

            <label>Property Id:</label>
            <input type="text" placeholder="Enter Id" onChange={e => setData({...data, propertyid: e.target.value})} required/>

            <label>Name On Card</label>
            <input type="text" placeholder="Enter card name" onChange={e => setData({...data, cardname: e.target.value})} required/>

            <label>Card Number:</label>
            <input type="text" placeholder="Enter card number" onChange={e => setData({...data, cardnumber: e.target.value})} required/>

               <button type="submit" >Proceed To Checkout</button>
        
        </form>
     </div>
 </div>

                  
    )
}

export default Payment;