import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
  paidProduct,
} from "../features/cartSlice";

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

  const handlePaidProduct = () => {
    dispatch(paidProduct());
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-4">
      {cart.cartItems.length === 0 ? (
        <div className="">
          <h1 className="text-warning mt-5">Su carrito está vacío</h1>
        </div>
      ) : (
        <div>
          <h2 className="text-info text-center">
            Pago en efectivo con delivery
          </h2>
          <div className="row">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="w-50 p-2 mt-4" key={cartItem.id}>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={cartItem.imgUrl}
                      alt={cartItem.name}
                      className="w-50 rounded"
                    />
                    <div className="text-info mt-1">{cartItem.title}</div>
                    <div className="text-white text-center">
                      {cartItem.description}
                    </div>
                    <div className="d-flex text-info">
                      Precio:
                      <div className="text-warning mx-2">
                        $ {cartItem.price}
                      </div>
                    </div>
                    <div className="text-primary mx-2 mt-4">Cantidad: </div>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(cartItem)}
                      >
                        +
                      </button>
                      <div className="text-info mx-4">
                        {cartItem.cartQuantity}
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDecreaseCart(cartItem)}
                      >
                        -
                      </button>
                    </div>
                    <div className="d-flex my-2 text-info">
                      Total:
                      <div className="text-warning mx-2">
                        ${cartItem.price * cartItem.cartQuantity}
                      </div>
                    </div>
                    <button
                      className="btn btn-danger my-2"
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-center my-4">
            <button
              className="btn btn-outline-secondary mx-4"
              onClick={() => handleClearCart()}
            >
              Vaciar carrito
            </button>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <span className="text-info">Sub total</span>
                <span className="text-warning mx-2">
                  ${cart.cartTotalAmount}
                </span>
              </div>
              <Link
                to="/confirmacion-de-compra"
                className="btn btn-outline-primary mx-4"
                onClick={handlePaidProduct}
              >
                Pagar
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
