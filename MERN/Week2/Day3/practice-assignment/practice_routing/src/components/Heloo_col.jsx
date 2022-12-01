import React from 'react'
import { useParams } from 'react-router-dom'

const Heloo = (props) => {
    const {number}=useParams()
    const {col1}=useParams()
    const {col2}=useParams()
  return (
    <div>
        <div style={{color:col1,backgroundColor:col2, border:'2px solid'}}>
            <h1>{isNaN (+ number) ? "The word is : " + number : "The number is : "+ number}</h1>
         </div>

    </div>
  )
}

export default Heloo