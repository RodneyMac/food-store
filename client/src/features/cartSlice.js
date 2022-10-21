import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSLice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if(itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Se incrementó ${state.cartItems[itemIndex].title} al carrito`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} añadida al carrito`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error(`${action.payload.title} eliminada del carrito`, {
        position: "bottom-right",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === action.payload.id
      )
      if(state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`Se disminuyó ${action.payload.title} del carrito`, {
          position: "bottom-left",
        });
      } else if(state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems
  
        toast.error(`${action.payload.title} eliminada del carrito`, {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Carrito eliminado`, {
        position: "bottom-right",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
        const {price, cartQuantity} = cartItem;
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity

        return cartTotal;
      }, {
        total: 0,
        quantity: 0
      });
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    paidProduct(state, action) {
      state.cartItems = [];
      toast.success("Muchas gracias por su compra!", {
        position: "top-center",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  },
});

export const {addToCart, removeFromCart, decreaseCart, clearCart, getTotals, paidProduct} = cartSLice.actions;
export default cartSLice.reducer