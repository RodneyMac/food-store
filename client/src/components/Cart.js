import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } from '../features/cartSlice';
import {BsArrowLeft} from "react-icons/bs";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-4">
      <h2>Carrito</h2>
      {cart.cartItems.length === 0 ? (
        <div className="">
          <p>Su carrito está vacío</p>
          <div className='text-center'>
            <Link to="/" className='text-decoration-none'>
              <BsArrowLeft className='mx-2'/>
              <span>Ir a Inicio</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="">
            <h3 className="">Producto</h3>
            <h3 className="">Precio</h3>
            <h3 className="">Cantidad</h3>
            <h3 className="">Total</h3>
          </div>
          <div className="">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="" key={cartItem.id}>
                  <div className="">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Eliminar
                      </button>
                    </div>
                  </div>
                  <div className="">${cartItem.price}</div>
                  <div className="">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="">
            <button className="" onClick={() => handleClearCart()}>
            Vaciar carrito
            </button>
            <div className="">
              <div className="">
                <span>Sub total</span>
                <span className="">${cart.cartTotalAmount}</span>
              </div>
              <p>Impuestos y gastos de envío calculados al finalizar la compra</p>
              <button>Verificar</button>
              <div className="">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Seguir comprando</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart;