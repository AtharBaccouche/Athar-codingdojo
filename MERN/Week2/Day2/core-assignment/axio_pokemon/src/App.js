import { useState } from 'react';
import './App.css';
import axios from 'axios'
function App() {


  const[pokemon, setPokemon]=useState([])
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(res => {
        console.log("✅", res);
        setPokemon(res.data.results);
      })
      .catch(err => {
        console.log("❌", err);
      })
  }

  return (
    <div className="App">
      <h1> Pokemon API 🦸‍♀️🦸‍♂️</h1>
        <button className='btn btn-outline-dark shadow p-3 mb-5 rounded' onClick={axiosPokemon}>All POkemon ⚡</button>
        {pokemon.map((pokemon, idx) => {
          return(
            
              <li key={idx}>{pokemon.name}</li>
            
            
          )
        }
        )}
   
    </div>
  );
}

export default App;
