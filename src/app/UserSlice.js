import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {},
  loading: false,
};

const UserSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setUserProfile } = UserSlice.actions;
export default UserSlice.reducer;
export const currentUser = (state) => state.user.userProfile;
export const isLoadingUser = (state) => state.user.loading;
