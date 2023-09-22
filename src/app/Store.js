import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import NavbarSlice from "./NavbarSlice.js";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    navbar: NavbarSlice,
  },
});

export default Store;
