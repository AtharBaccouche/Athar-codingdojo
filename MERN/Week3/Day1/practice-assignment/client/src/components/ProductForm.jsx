import React from 'react'
import  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


export const ProductForm = () => {
    const [title, setTitle] = useState('');
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState('')
    const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/product/', { title, price, description })
      .then(() => {
        //navigate('/');
      })
      .catch((err) => {
        const errResponse = err.response.data.errors;
        const errObj = {};
        for (const key of Object.keys(errResponse)) {
          errObj[key] = errResponse[key].message;
        }
        setErrors(errObj);
      });
  };
    

    






    return (
    <div>
        <form onSubmit={submitHandler}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <p>{errors.title}</p>
          <label>Price:</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price} min={}
          />
          <p>{errors.price}</p>
          <label>Description:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <p>{errors.description}</p>
          <div>
          <Link to="/">Cancel</Link>
          <input type="submit" value="Submit" />
          </div>
          




        </div>
        
      </form>


    </div>
  )
}
