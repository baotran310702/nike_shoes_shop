import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: [], //Contain id from db,
  cartPrice: 0,
  cartQuantity: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      console.log(action.payload.cartState);
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItems: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.title} quantity increased!`, {
          duration: 850,
        });
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to cart!`, {
          duration: 850,
        });
      }
    },
    setRemoveItemsFromCart: (state, action) => {
      const removedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removedItems;
      toast.success(`${action.payload.title} has been removed from cart!`, {
        duration: 850,
      });
    },
    setDecreasementQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
        }
      }
    },
    setIncreasementQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
    },
    setClearCart: (state, action) => {
      state.cartItems = [];
      toast.success("Cart Clear Successfully!", { duration: 850 });
    },
    setSumPrice: (state, action) => {
      state.sumPrice = action.payload.sumPrice;
    },
    getQTYandPrice: (state, action) => {
      let totalQTY = 0;
      let subTotal = 0;
      state.cartItems.forEach((item) => {
        totalQTY += item.cartQuantity;
        subTotal += item.cartQuantity * item.price;
      });

      state.cartQuantity = totalQTY;
      state.cartPrice = subTotal;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItems,
  setRemoveItemsFromCart,
  setIncreasementQTY,
  setDecreasementQTY,
  setClearCart,
  getQTYandPrice,
} = CartSlice.actions;
export default CartSlice.reducer;
export const currentState = (state) => state.cart.cartState;
export const currentCartItems = (state) => state.cart.cartItems;
export const currentSumPrice = (state) => state.cart.cartPrice;
export const currentQTY = (state) => state.cart.cartQuantity;
