import Form from './components/Form';
import {Switch, Route} from "react-router-dom";
import Planet from './components/Planet';
import People from './components/People';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello Luke API-walker </h1>
      <Form/>
      
      <Switch>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planet/:id" element={<Planet />} />
      </Switch>
      
     
    </div>
  );
}

export default App;
