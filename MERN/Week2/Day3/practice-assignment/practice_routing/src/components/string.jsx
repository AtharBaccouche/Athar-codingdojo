import { useParams } from 'react-router-dom';
import React from 'react'

const String = (props) => {
  const {id} = useParams();
  return (
    <div>
      
      <h1>{isNaN (+ id) ? "The word is : " + id : "The number is : "+ id}</h1>


    </div>
  )
}

export default String