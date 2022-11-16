import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Pizzas from "./views/Pizzas";
import Empanadas from "./views/Empanadas";
import Bebidas from "./views/Bebidas";
import Postres from "./views/Postres";
import PurchaseConfirmation from "./views/PurchaseConfirmation";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Checkout from "./views/Checkout";
import Logo from "./components/header";

function App() {
  return (
    <div>
      <Logo/>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/empanadas" element={<Empanadas />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/postres" element={<Postres />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route
          path="/confirmacion-de-compra"
          element={<PurchaseConfirmation />}
        />
      </Routes>
    </div>
  );
}

export default App;
