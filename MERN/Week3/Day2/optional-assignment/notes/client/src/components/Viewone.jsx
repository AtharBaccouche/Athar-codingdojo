import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
const Viewone = (props) => {
    
    const {id }=useParams()
    const[oneNote,setOneNote]=useState(null)
    console.log(id)


    useEffect(() =>{
        axios.get(`http://localhost:8000/api/note/${id}`)
            .then(res =>{
                console.log(res.data)
                setOneNote(res.data.note)

           
            })
            .catch(err => console.log(err))

    }, [])

    //////////////////////////////////////////
    return (
        <div>{
            oneNote ? <div >
                {oneNote.title}<br/>
                {oneNote.content}<br/>
                <p>{oneNote.createdAt}</p>
            </div> : "londing.."
        }
       
        


        </div>
    )
} 

export default Viewone;