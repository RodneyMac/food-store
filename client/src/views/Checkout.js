import React, { useState } from "react";
import { paidProduct } from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const generateId = () => {
    let generate = Math.floor(Math.random() * 1000);
    return generate;
  };

  const [clientData, setClientData] = useState([]);
  const [customer, setCustomer] = useState({});

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePaidProduct = (e) => {
    e.preventDefault();
    let newUser = { ...customer, id: generateId() };
    setClientData((state) => [...state, newUser]);
    setCustomer({});
    console.log(clientData);
    console.log(`Total compra: ${cart.cartTotalAmount}`, newUser);
    console.log("Producto/s:", cart.cartItems);

    dispatch(paidProduct());
    navigate("/confirmacion-de-compra");
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center mt-4 text-info">Checkout</h2>
      <h2 className="text-info text-center">Pago en efectivo con delivery</h2>
      <div className="d-flex flex-column justify-content-center align-items-center mb-3">
        <div className="">
          <div className="text-warning">Productos seleccionados:</div>
          {cart.cartItems.map((item) => (
            <div key={item.id}>
              <div className="d-flex text-warning">{item.cartQuantity}
                <div className="text-info mx-2">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center text-info fs-4">Total:
          <div className="text-warning mx-2 fs-4">$ {cart.cartTotalAmount}</div>
        </div>
      </div>
      <div className="w-50">
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="telefono"
            name="telefono"
            placeholder="Teléfono"
            autoFocus
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            placeholder="Dirección"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="comentarios"
            rows="3"
            name="comentarios"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={handlePaidProduct}
          >
            Confirmar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
