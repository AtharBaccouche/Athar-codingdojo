import React from 'react'
import  { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Main = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/api/product/').then((res) => {
          setProducts(res.data);
          
        });
      }, []);




  return (
    <div>
        <h1>All PRODUCTS</h1>
        {products.map((product)=>{
            return(
                <div key={product._id}>
                    {product.title}
                    <Link to={`/details/${product._id}`}>Details</Link> 

                </div>

            )

        })}
    </div>
  )
}

export default Main