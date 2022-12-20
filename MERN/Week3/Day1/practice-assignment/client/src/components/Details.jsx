import React from 'react'
import  { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Details = (props) => {
   
    const[oneProduct,setOneProduct]=useState({})
    const {id }=useParams()
    useEffect(() =>{
        axios.get(`http://localhost:5000/api/product/${id}`)
            .then(res =>{
                console.log(res.data)
                setOneProduct(res.data.note)

           
            })
            .catch(err => console.log(err))

    }, [id])


  return (
    <div>
       
           TITLE: {oneProduct.title}<br/>
            PRICE:{oneProduct.price}<br/>
            <p>{oneProduct.description}</p>
        


    </div>
  )
}

export default Details