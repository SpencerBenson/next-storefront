import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { cart } from "../../types";
type cartState = {
  items: cart[];
};
const initialState: cartState = {
  items: useLocalStorage(),
};
type addToCartAction = {
  type: string;
  payload: cart;
};
type removeFromCartAction = {
  type: string;
  payload: number;
};
type increaseAction = removeFromCartAction;
type decreaseAction = removeFromCartAction;
type emptyCartAction = {
  type: string;
};
type state = {
  cart: {
    items: cart[];
  };
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: addToCartAction) {
    
        let { quantity } = action.payload;
      quantity = quantity < 1 ? 1 : quantity;
      state.items = [...state.items, { ...action.payload, quantity }];
     
    },
    emptyCart: (state, _action: emptyCartAction) => {
      state.items = [];
    },
    increaseItemQuantity(state, action: increaseAction) {
      state.items = state.items.map((item) => {
       
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
       
        return item;
      });
    },
    decreaseItemQuantity(state, action: decreaseAction) {
     
        state.items = state.items.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
     
    },
    removeFromCart(state, action: removeFromCartAction) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
  emptyCart,
} = cartSlice.actions;
export const selectItem = (state: state) => state.cart.items;

export const totalPrice = (state: state) =>
  state.cart.items.reduce((acc, next) => acc + next.price * next.quantity, 0);
export default cartSlice.reducer;
