import BoxForm from './components/BoxForm';
import React, {useState} from 'react';
import './App.css'
import DisplayBox from './components/DisplayBox';

function App() {

 const [boxes, setBoxes] = useState([]);

 const getValues = (color,width) => {
  setBoxes([...boxes, { color:color, width:width}]);
 } 

  return (
    <div className="App">
      
    <BoxForm getValues={getValues}/>
    <DisplayBox boxes={boxes}  />
    </div>
  );
}

export default App;
