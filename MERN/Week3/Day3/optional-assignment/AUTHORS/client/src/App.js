import react from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import CreateAuthors from './components/CreateAuthors';
import UpdateAuthors from './components/UpdateAuthors';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/create" element={<CreateAuthors/>}/>
        <Route path="/edit/:id" element={<UpdateAuthors/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
