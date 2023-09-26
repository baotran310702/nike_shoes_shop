import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import NavbarSlice from "./NavbarSlice.js";
import FooterSlice from "./FooterSlice.js";
import ItemsSlice from "./ItemsSlice.js";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    navbar: NavbarSlice,
    footer: FooterSlice,
    item: ItemsSlice,
  },
});

export default Store;
