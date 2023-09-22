import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navState: false,
};

const NavbarSlice = createSlice({
  initialState,
  name: "navbar",
  reducers: {
    setStateNav: (state, action) => {
      state.navState = action.payload.navState;
    },
  },
});

export const { setStateNav } = NavbarSlice.actions;
export default NavbarSlice.reducer;
export const currentNavState = (state) => state.navbar.navState;
