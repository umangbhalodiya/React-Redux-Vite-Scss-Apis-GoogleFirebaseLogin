import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../api/base";
// import { authHeader, authHeaderForm } from "../../helpers/authHelper";

const initialState = {
  count: 0,
};

// Rest api functions to make request call

// export const getApis = createAsyncThunk(
//   "/commonStateSlice/getApis",
//   async (body) => {
//     try {
//       const response = await axiosInstance.get(`endpoint`);
//       return response.data;
//     } catch (e) {
//       return e.response.data;
//     }
//   }
// );

// export const deleteApi = createAsyncThunk(
//   "/commonStateSlice/deleteApi",
//   async (body) => {
//     try {
//       const response = await axiosInstance.delete(`endpoint/${body}`);
//       return response.data;
//     } catch (e) {
//       return e.response.data;
//     }
//   }
// );

// export const updateApi = createAsyncThunk(
//   "/commonStateSlice/updateApi",
//   async (body) => {
//     try {
//       const response = await axiosInstance.put(`endpoint/${body?._id}`, body);
//       return response.data;
//     } catch (e) {
//       return e.response.data;
//     }
//   }
// );

// export const addApis = createAsyncThunk(
//   "/commonStateSlice/addApis",
//   async (body) => {
//     try {
//       const response = await axiosInstance.post(`endpoint`, body);
//       return response.data;
//     } catch (e) {
//       return e.response.data;
//     }
//   }
// );

export const commonStateSlice = createSlice({
  name: "commonStates",
  initialState: initialState,
  reducers: {
    // Below reducer is common reducer to manage all state values
    // How to use : dispatch(setCommonState({stateName: 'count', data: 1}))
    setCommonState: (state, action) => {
      state[action.payload.stateName] = action.payload.data;
    },
    resetCommonStates: () => initialState, //reset all state values to initial state
  },
  extraReducers(builder) {
    builder;
    // .addCase(getApis.pending, (state) => {
    //   state.status = "loading";
    // })
    // .addCase(getApis.fulfilled, (state, action) => {
    //   state.status = "success";
    //   state.apiDocs = action?.payload?.payload?.data;
    // })
    // .addCase(getApis.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // });
  },
});

//exporting custom reducers
export const { setCommonState, resetCommonStates } = commonStateSlice.actions;
export default commonStateSlice.reducer;
