import React from 'react'
import { useState } from "react"
import axios from "axios"
import { useNavigate ,Link} from "react-router-dom"

const CreateAuthors = () => {
    const navigate = useNavigate();
    const[name,setName]=useState('')
    const[errors,setErrors]=useState({})
    const createAuthor=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/authors/",{name})
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
        <form onSubmit={createAuthor}>
            <label>Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
            <p>{errors.name}</p>
            <Link to="/">Cancel</Link>
            <button>Submit</button>

        </form>



    </div>
  )
}

export default CreateAuthors
