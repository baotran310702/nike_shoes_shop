import { createSlice } from "@reduxjs/toolkit";
import {
  getPopularSales,
  getProducts,
  getTopRateSales,
} from "../utils/services";

const initialState = {
  popularSales: [],
  topRateSales: [],
  Products: [],
  loading: false,
};

const ProductSlice = createSlice({
  initialState,
  name: "product",
  reducers: {
    setProductStart: (state) => {
      state.loading = true;
    },
    setPopularProductSuccess: (state, action) => {
      state.popularSales = action.payload;
      state.loading = false;
    },
    setTopRateProductSucess: (state, action) => {
      state.topRateSales = action.payload;
      state.loading = false;
    },
    setProductSuccess: (state, action) => {
      state.Products = action.payload;
      state.loading = false;
    },
    setProductFail: (state) => {
      state.loading = false;
    },
  },
});

//Define a async thunk action to fetch stories
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setProductStart());

    const res = getProducts();
    const data = await res;
    dispatch(setProductSuccess(data));
  } catch (error) {
    console.error("Err failed fetching products", error);
    dispatch(setProductFail());
  }
};

export const fetchPopularSales = () => async (dispatch) => {
  try {
    dispatch(setProductStart());
    const res = getPopularSales();
    const data = await res;
    console.log("popularSales in slice: ", data);
    dispatch(setPopularProductSuccess(data));
  } catch (error) {
    console.log("err fail fetch popular", error);
    dispatch(setProductFail);
  }
};

export const fetchTopRateSales = () => async (dispatch) => {
  try {
    dispatch(setProductStart());
    const res = getTopRateSales();
    const data = await res;
    console.log("topRateSales in slice", data);
    dispatch(setTopRateProductSucess(data));
  } catch (error) {
    console.log("top rate error:", error);
    dispatch(setProductFail());
  }
};

export const {
  setProductStart,
  setProductSuccess,
  setProductFail,
  setPopularProductSuccess,
  setTopRateProductSucess,
} = ProductSlice.actions;
export default ProductSlice.reducer;

export const currentProducts = (state) => state.product.Products;
export const currentPopularSales = (state) => state.product.popularSales;
export const currentTopRateSales = (state) => state.product.topRateSales;
export const isLoadingStories = (state) => state.product.loading;
