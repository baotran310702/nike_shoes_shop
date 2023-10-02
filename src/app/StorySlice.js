import { createSlice } from "@reduxjs/toolkit";
import { getStory } from "../utils/services";

const initialState = {
  Stories: [],
  loading: false,
};

const StorySlice = createSlice({
  initialState,
  name: "story",
  reducers: {
    setStoryStart: (state) => {
      state.loading = true;
    },
    setStorySuccess: (state, action) => {
      state.Stories = action.payload;
      state.loading = false;
    },
    setStoryFailure: (state) => {
      state.loading = false;
    },
  },
});

//Define a async thunk action to fetch stories
export const fetchStory = () => async (dispatch) => {
  try {
    dispatch(setStoryStart());

    const res = getStory();
    const data = (await res).data;
    dispatch(setStorySuccess(data));
  } catch (error) {
    console.error("Err failed fetching story", error);
    dispatch(setStoryFailure());
  }
};

export const { setStoryStart, setStorySuccess, setStoryFailure } =
  StorySlice.actions;
export default StorySlice.reducer;
export const currentStoriesInfor = (state) => state.story.Stories;
export const isLoadingStories = (state) => state.story.loading;
