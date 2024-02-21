import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    Logout: () => initialState,
    setUserData: (state, action) => {
      state[action.payload.stateName] = action.payload.data;
    },
  },
  extraReducers() {},
});

export const { setUserData, Logout } = authSlice.actions;
export default authSlice.reducer;
