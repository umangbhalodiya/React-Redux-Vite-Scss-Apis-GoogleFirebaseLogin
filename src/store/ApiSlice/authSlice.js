import { createSlice } from "@reduxjs/toolkit";

//initial states with default values
const initialState = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Below reducer is common reducer to manage all state values
    // How to use : dispatch(setUserData({stateName: 'user', data: data}))
    setUserData: (state, action) => {
      state[action.payload.stateName] = action.payload.data;
    },
    Logout: () => initialState, //reset all state values to initial state
  },
  extraReducers() {},
});

//exporting custom reducers
export const { setUserData, Logout } = authSlice.actions;
export default authSlice.reducer;
