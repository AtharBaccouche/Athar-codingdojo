import React from 'react'
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const People = (props) => {

    const [data, setData] = useState({});
    const{id}=useParams()


    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response=>
                {setData(response.data)})
            .catch( err => {
                console.log(err);
                setData({error:"These are not the droids you are looking for"})

                
                
            });

    }, [id]); 

  return (
    data.error ?
    <h1>{data.error}</h1> :
    <div>
        <h1>Person: {data.name}</h1>
        <p>
            Height: {data.height}<br/>
            Mass: {data.mass}<br/>
            Skin color: {data.skin_color}<br/>
            Hair Color: {data.hair_color}
        </p>
    </div>


  )
}

export default People