import React from 'react'
import { useState,useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom'

const EditNote = (props) => {
    const navigate=useNavigate()
    const [errors, setErrors] = useState([]); 
    const[inputs,setInputs]=useState({title:"",content:"",is_important:false})
    const {id }=useParams()
    

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/note/${id}`)
            .then(res =>{
                console.log(res.data)
                setInputs(res.data.note)

           
            })
            .catch(err => console.log(err))

    }, [])

    /////////////////////////////////////////////////:::///////////////
    const Updatenote=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:8000/api/note/"+ id,{
            title: inputs.title,
            content: inputs.content,
            is_important: inputs.is_important
        })
        .then(res =>{
            navigate("/notes")
            console.log(res.data)
       
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
        </div>
        <form onSubmit={Updatenote} >
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

export default EditNote