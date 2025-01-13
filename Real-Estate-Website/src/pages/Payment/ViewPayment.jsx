import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ViewPayment = () => {

    const [payment,setPayment]=useState({
        id:"",
        name:"",
        email:"",
        city:"",
        propertyid:"",
        cardname:"",
        cardnumber:""
     })
   
     const {id} = useParams();
   
      useEffect(()=>{
       loadPayment()
      },[])
    
      const loadPayment = async () => {
       const result = await axios.get(`http://localhost:8081/payment/getpaymentbyid${id}`)
       setPayment(result.data)
      }

  return (
    <div className="backgrounds">
       <div className="payment-form"> 
           <form >
              <h1>Show Details</h1>
              <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>id:</b>
                        {payment.id}
                    </li>
                    <li className='list-group-item'>
                        <b>name:</b>
                        {payment.name}
                    </li>
                    <li className='list-group-item'>
                        <b>email:</b>
                        {payment.email}
                    </li>
                    <li className='list-group-item'>
                        <b>city:</b>
                        {payment.city}
                    </li>
                    <li className='list-group-item'>
                        <b>propertyid:</b>
                        {payment.propertyid}
                    </li>

                    <li className='list-group-item'>
                        <b>Name on card:</b>
                        {payment.cardname}
                    </li>

                    <li className='list-group-item'>
                        <b>card number:</b>
                        {payment.cardnumber}
                    </li>
                </ul>
    
                   <Link  className='btn btn-primary my-2' to={'/paymentdetails'}>Back</Link>
            
            </form>
        </div>
    </div>
  )
}

export default ViewPayment;