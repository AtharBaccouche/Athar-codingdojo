import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Main = (props) => {
    const[notes,setNotes]=useState([])

    useEffect(() =>{
        axios.get("http://localhost:8000/api/note")
        .then(res =>{
            console.log(res.data)
            setNotes(res.data)
        })
        .catch(err => console.log(err))

    },[])

  return (
    <div>
    






    </div>
  )
}

export default Main