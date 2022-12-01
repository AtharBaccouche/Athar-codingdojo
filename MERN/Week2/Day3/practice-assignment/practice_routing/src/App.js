import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import String from './components/string';
import Heloo from './components/Heloo_col';

function App() {
  
  return (
    <div className="App">
      <h1>Routing</h1>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='/:id' element={<String/>}/>
        <Route path='/:number/:col1/:col2' element={<Heloo />} />
        
      </Routes>
    </div>
  );
}

export default App;
