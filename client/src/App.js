import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './views/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <h2 className='text-center'>App</h2>
    </div>
  );
}

export default App;
