import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import NavbarSlice from "./NavbarSlice.js";
import FooterSlice from "./FooterSlice.js";
import ItemsSlice from "./ItemsSlice.js";
import StorySlice from "./StorySlice.js";
import ProductSlice from "./ProductSlice.js";
import UserSlice from "./UserSlice.js";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    navbar: NavbarSlice,
    footer: FooterSlice,
    item: ItemsSlice,
    story: StorySlice,
    product: ProductSlice,
    user: UserSlice,
  },
});

export default Store;
