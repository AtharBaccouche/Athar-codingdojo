import PersonCard from './components/togther';
import './App.css';
const arr=[
{firstname: "Doe",lastname:  "Jane" ,age:45, haircolor:"black" },
{firstname:"Smith", lastname:"Jhon", age:88, haircolor:"brown"}
]

function App() {
  return (
    <div className="App">
      {arr.map(person =>{
      return <PersonCard  firstname={person.firstname} lastname={person.lastname} age={person.age}  haircolor={person.haircolor} />
      })
      }
    </div>
  );
}

export default App;
