import PersonCard from './components/newcomponents';
import './App.css';
const  arr=[
  {firstname: "Doe", lastname: "Jane", age:45  , haircolor: "black"},
  {firstname: "Smith", lastname: "John", age: 88, haircolor: "Brown"},
  {firstname: "Fillmore", lastname: "Millard", age: 50, haircolor: "Brown"},
  {firstname: "Smith", lastname: "Maria", age: 30, haircolor: "Brown"}
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
