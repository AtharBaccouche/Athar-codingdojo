import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import AuthorList from './AuthorList'


const Main = (props) => {
    const[isLoading ,setIsLoading]=useState(true)
    const[authors,setAuthors]=useState([])
    //gET ALL Authors
    useEffect(() =>{
        axios.get("http://localhost:5000/api/authors")
        .then(res =>{
            console.log(res.data)
            setAuthors(res.data)
            setIsLoading(false);
        })
        .catch(err => console.log(err))

    },[])

    //delette handeled
    const deleteHandler = id=> {
        axios.delete(`http://localhost:5000/api/authors/${id}`)
        .then((res) => {
            console.log(res.data);
            console.log("delete sucess ");
            setAuthors(authors.filter((author) => author._id !== id));
          })
        
        .catch(err=>console.log(err))


    }
    
    if (isLoading){
        return <h2>Loading</h2>
    }
  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to="/create">Add Author</Link>
        <h3>we have quotes by :</h3>
        <AuthorList  authors={authors} deleteHandler={deleteHandler} />
           

   

    
        


    </div>
  )
}

export default Main