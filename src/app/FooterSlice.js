import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHidden: false,
};

const FooterSlice = createSlice({
  initialState,
  name: "footer",
  reducers: {
    setHiddenFooter: (state, action) => {
      state.isHidden = action.payload.isHidden;
    },
  },
});

export const { setHiddenFooter } = FooterSlice.actions;
export default FooterSlice.reducer;
export const currentHidden = (state) => state.footer.isHidden;
