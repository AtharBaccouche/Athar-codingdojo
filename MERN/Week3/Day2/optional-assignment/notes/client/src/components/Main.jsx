import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import noteStyle from "./Main.model.css"

//all the notes
const Main = (props) => {
    const [notes,setNotes]=useState([])
    const navigate=useNavigate()
    
    /////////////////
    const goToUpdate=(noteId)=>{
        navigate("/update/"+ noteId)
    }

    ///////DELETE///////////////////////
    const deletenote=(noteId)=>{
        axios.delete("http://localhost:8000/api/note/"+ noteId)
        .then(res =>{
            console.log(res.data)
           console.log("DELETTE SUCESS")
           setNotes(notes.filter((note)=>note._id!==noteId))
        })
        .catch(err => console.log(err))
        
    }
    //////////////////////////:///////
    useEffect(() =>{
        axios.get("http://localhost:8000/api/note")
        .then(res =>{
            console.log(res.data)
            setNotes(res.data)
        })
        .catch(err => console.log(err))

    },[])
    ////////////////////////////////////////////////
  return (
    <div>
        {notes.map((note)=>{
            return(
                <div key={note._id} className="box">
                    <Link to={`/notes/${note._id}`}>
                    <div>
                        <h3>{note.is_important ? "¤" : ""}{note.title}</h3>
                        <p>{note.content}</p>
                    </div>
                    <p>{note.createdAt}</p>
                    </Link>
                    <button onClick={()=>goToUpdate(note._id)}>Edit</button>
                    <button onClick={()=>deletenote(note._id)}>Delete</button>


                </div>
            )

        })}


        
    </div>
  )
}

export default Main