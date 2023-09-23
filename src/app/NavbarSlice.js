import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navState: false,
  isHidden: false,
};

const NavbarSlice = createSlice({
  initialState,
  name: "navbar",
  reducers: {
    setStateNav: (state, action) => {
      state.navState = action.payload.navState;
    },
    setHiddenNav: (state, action) => {
      state.isHidden = action.payload.isHidden;
    },
  },
});

export const { setStateNav, setHiddenNav } = NavbarSlice.actions;
export default NavbarSlice.reducer;
export const currentNavState = (state) => state.navbar.navState;
export const currentHidden = (state) => state.navbar.isHidden;
