
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);


  const navigate = useNavigate()

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('details', details);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8081/property/addproperty', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    navigate('/residency')
  };

  return (
     <div className="background">
       <div className="booking-form">
         <form onSubmit={handleSubmit}>
             <h1>Add Property</h1>
             <label>Name:</label>
             <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} required />
           
             <label>Price:</label>
             <input type="number" placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} required />

             <label>Details:</label>
             <input type="text" placeholder='Enter Details' value={details} onChange={(e) => setDetails(e.target.value)} required />
           
             <label>Image:</label>
             <input type="file" onChange={handleImageChange} required />
          
              <button type="submit">Submit</button>
         </form>
        </div>
      </div>
  );
};

export default AddProperty;
