import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Item: {},
};

const ItemsSlice = createSlice({
  initialState,
  name: "item",
  reducers: {
    setItems: (state, action) => {
      state.Item = action.payload.Item;
    },
  },
});

export const { setItems } = ItemsSlice.actions;
export default ItemsSlice.reducer;
export const currentItemsInfor = (state) => state.item.Item;
