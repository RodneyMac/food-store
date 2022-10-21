import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './views/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Pizzas from './views/Pizzas';
import Empanadas from './views/Empanadas';
import Bebidas from './views/Bebidas';
import Postres from './views/Postres';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <Navbar/>
      <Categories/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pizzas" element={<Pizzas/>}/>
        <Route path="/empanadas" element={<Empanadas/>}/>
        <Route path="/bebidas" element={<Bebidas/>}/>
        <Route path="/postres" element={<Postres/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
