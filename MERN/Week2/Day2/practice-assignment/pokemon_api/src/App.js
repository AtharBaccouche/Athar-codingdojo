import './App.css';
import {useState} from 'react';

function App() {
  const[superpokemon, setSuperpokemon]=useState([]);
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();
        }).then(response => {
          setSuperpokemon(response.results);
        }).catch(err=>{
            console.log(err);
        });
  }
  return (
    <div className="App">
      <div className='container mt-5'>
        <h1>SuperPokémon</h1>
        <button className='btn btn-primary' onClick={fetchPokemon}>Fetch Them All </button>

        {superpokemon.map((hero, idx) => {
          return(
            <ul key={idx}>
              <li>{hero.name}</li>
            
            </ul>
          )
        }
        )}



      </div>
     
    </div>
  );
}

export default App;
