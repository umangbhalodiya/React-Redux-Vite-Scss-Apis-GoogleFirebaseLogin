import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";

const initialState = {
  status: "idle",
  error: null,
  products: [],
  singleProduct: {},
};

export const getProducts = createAsyncThunk(
  "/productSlice/getProducts",
  async (body) => {
    try {
      const response = await axiosInstance.get(`/`, body);
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setVisetProducts: (state, action) => {
      state[action.payload.stateName] = action.payload.data;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setVisetProducts } = productSlice.actions;
export default productSlice.reducer;
