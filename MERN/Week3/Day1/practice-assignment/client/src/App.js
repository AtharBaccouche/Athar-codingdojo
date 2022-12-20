import { ProductForm } from './components/ProductForm';
import Details from './components/Details';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={<ProductForm />} />
        <Route path="/allproduct" element={<Main />} />
        <Route path="/details/:id" element={<Details />} />
        
      </Routes>
    
    </div>
  );
}

export default App;
