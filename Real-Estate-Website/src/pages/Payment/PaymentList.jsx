import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const PaymentList = () => {

    const [payments,setPayments]=useState([]);

    const { id }=useParams();
  
    useEffect(()=>{
      loadPayments();
    },[]);
  
    const loadPayments = async () =>{
      const result=await axios.get("http://localhost:8081/payment/getall")
      setPayments(result.data);
    }
  
     const deletePayment = async (id) => {
        await axios.delete(`http://localhost:8081/payment/deletepayment${id}`);
        loadPayments();
     };
  

  return (
    <div className="container">
    <div className="py-4">
        <h1 className = "text-center"> Payment List</h1>
        <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">PropertyId</th>
            <th scope="col">Name on card</th>
            <th scope="col">Card Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
             payments.map((payment,index)=>(
               <tr>
                  <th scope="row" key={index}>{index+1}</th>
                  <td>{payment.name}</td>
                  <td>{payment.email}</td>
                  <td>{payment.city}</td>
                  <td>{payment.propertyid}</td>
                  <td>{payment.cardname}</td>
                  <td>{payment.cardnumber}</td>
                  <td>
                     <Link 
                       className="btn btn-primary mx-2"
                       to={`/viewpayment/${payment.id}`}
                       >View</Link>
                     <Link 
                       className="btn btn-outline-primary mx-2"
                       to={`/editpayment/${payment.id}`}
                       >
                       Edit
                     </Link>
                     <button className="btn btn-danger mx-2"
                      onClick={()=>deletePayment(payment.id)}
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

export default PaymentList;