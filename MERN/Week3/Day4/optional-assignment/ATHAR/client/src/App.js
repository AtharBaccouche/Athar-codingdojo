
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Main from './components/Main';
function App() {
  return (
    <div className="App">
    <h1>Notes</h1>
    <Link to={"/notes"}>Home</Link>&nbsp;&nbsp;
    <Link to={"/create"}>Create</Link> 
    <hr/>
    <Routes>
      <Route path={"/notes"} element={<Main />}/>
    </Routes>

  
    </div>
  );
}

export default App;
