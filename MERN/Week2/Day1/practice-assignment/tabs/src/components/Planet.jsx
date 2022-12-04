import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Planet = () => {
    const[data,setData]=useState({})
    const{id}=useParams();

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
        <h1>Planet: {data.name}</h1>
      <p>
        Terrain: {data.terrain}<br/>
        Climate: {data.climate}<br/>
        Surface Water: {data.surface_water ? "true": "false"}<br/>
        Population: {data.population}
      </p>
    </div>
  )
}

export default Planet