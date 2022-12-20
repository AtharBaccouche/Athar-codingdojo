import React from 'react'
import { useState } from "react"
import axios from "axios"
import { useNavigate ,Link,useParams} from "react-router-dom"
import { useEffect } from 'react'

const UpdateAuthors = () => {
    const navigate = useNavigate();
    const[name,setName]=useState({name :""})
    const[errors,setErrors]=useState({})
    
    const{id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/authors/${id}`)
        .then((res)=>{
            setName(res.data.name)
        })
        .catch(()=>{})
    },[id])
    const createAuthor=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5000/api/authors/${id}`,{name : name})
        .then((res) => {
            console.log(res.data)
            navigate("/");
        })
        .catch(err => {
            
            const errResponse=err.response.data.errors;
            const errObj={};
            for(const key of Object.keys(errResponse)){
                errObj[key]=errResponse[key].message
            }
            setErrors(errObj)
        })
    }
    

  return (
    <div>
        <form onSubmit={createAuthor} >
            <label>Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
          
            <Link to="/">Cancel</Link>
            <button>Submit</button>

        </form>



    </div>
  )
}

export default UpdateAuthors
