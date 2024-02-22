import { createSlice } from "@reduxjs/toolkit";

//initial states with default values
const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Below reducer is common reducer to manage all state values
    // How to use : dispatch(setCartData({stateName: 'cartItems', data: data}))
    setCartData: (state, action) => {
      state[action.payload.stateName] = action.payload.data;
    },
  },
});

//exporting custom reducers
export const { setCartData } = cartSlice.actions;
export default cartSlice.reducer;
