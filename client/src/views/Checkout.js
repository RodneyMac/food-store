import React from 'react';
import { paidProduct } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();

  const handlePaidProduct = () => {
    dispatch(paidProduct());
  };

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      <h2 className='text-center mt-4 text-info'>Checkout</h2>
      <h2 className="text-info text-center">Pago en efectivo con delivery</h2>
      <div className='w-50'>
        <div className="mb-3">
          <input type="number" className="form-control" id="telefono" placeholder="Teléfono" autoFocus/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="nombre" placeholder="Nombre"/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="direccion" placeholder="Dirección"/>
        </div>
        <div className="mb-3">
          <textarea className="form-control" id="comentarios" rows="3"></textarea>
        </div>
        <div className='text-center'>
          <Link to="/confirmacion-de-compra" className='btn btn-primary' onClick={handlePaidProduct}>Confirmar Pago</Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout;