import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 88} hairColor="Brown" />
      <PersonCard  firstName= "Doe" lastName="Jane" age={45}  hairColor="black" />
      <PersonCard firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={33} hairColor="Brown" />
      
    </div>
  );
}

export default App;
