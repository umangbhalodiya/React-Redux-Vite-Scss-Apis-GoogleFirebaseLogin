import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartData: (state, action) => {
      state[action.payload.stateName] = action.payload.data;
    },
  },
});

export const { setCartData } = cartSlice.actions;

export default cartSlice.reducer;
