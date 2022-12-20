import { useState } from "react"
import React from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

///////CREATE NOTE///////

const Create = (props) => {
    const navigate=useNavigate()
    const [errors, setErrors] = useState([]); 
    const[inputs,setInputs]=useState({title:"",content:"",is_important:false})


    ////////CREATE ////
    const createNote=(e)=>{
        e.preventDefault()
        const newNote={
            title: inputs.title,
            content: inputs.content,
            is_important: inputs.is_important
        }
        axios.post("http://localhost:8000/api/note", newNote)
        .then(res =>{
            console.log(res.data)
            navigate("/notes")
         
        })
        .catch(err => {
            console.log("❌",err);
            const errResponse=err.response.data.errors;
            console.log(errResponse);
            const errObj=[];
            for(const key of Object.keys(errResponse)){
                // 
                errObj.push(errResponse[key].message)
            }
            
            setErrors(errObj)
                    
        })
        
        
    }



  return (
    <div>
        <div>
            {JSON.stringify(inputs)}
            <p>{JSON.stringify(errors)} </p>
        </div>
        <form onSubmit={createNote}>
             {errors.map((err, index) => <p key={index}>{err}</p>)} 
            <label>Title:</label>
            <input type="text" onChange={(e)=>setInputs({...inputs, title: e.target.value})} value={inputs.title}/> <br />
            <label>Content:</label>
            <input type="text"   onChange={(e)=>setInputs({...inputs, content: e.target.value})}   value={inputs.content}/><br/>
            <label>Is_important:</label> 
            <input type="checkbox"  onChange={(e)=>setInputs({...inputs, is_important: e.target.checked})} checked={inputs.is_important}></input> <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Create