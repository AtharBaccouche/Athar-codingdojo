
import './App.css';
import Main from './components/Main';
import Create from './components/Create';
import EditNote from './components/EditNote';
import Viewone from './components/Viewone';
import {Routes,Route,Link} from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <h1>Notes</h1>
      <Link to={"/notes"}>Home</Link>&nbsp;&nbsp;
      <Link to={"/create"}>Create</Link>
      <hr/>
      <Routes>
        
          <Route path="/notes" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/notes/:id" element={<Viewone/>}/>
          <Route  path="/update/:id"   element={<EditNote/>}/>
      </Routes>
    </div>
  );
}

export default App;







