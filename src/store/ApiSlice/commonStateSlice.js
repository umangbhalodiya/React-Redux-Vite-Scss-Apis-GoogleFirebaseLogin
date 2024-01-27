import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader, authHeaderForm } from "../../helpers/authHelper";

const initialState = {
  count: 0,
};

// export const getApis = createAsyncThunk(
//   "/commonStateSlice/getApis",
//   async (body) => {
//     try {
//       const response = await axiosInstance.get(`api-doc`, {
//         headers: { ...authHeader() },
//       });
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
//       const response = await axiosInstance.delete(`api-doc/${body}`, {
//         headers: { ...authHeader() },
//       });
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
//       const response = await axiosInstance.put(`api-doc/${body?._id}`, body, {
//         headers: { ...authHeader() },
//       });
//       return response.data;
//     } catch (e) {
//       return e.response.data;
//     }
//   }
// );

// export const changeApiIndex = createAsyncThunk(
//   "/commonStateSlice/changeApiIndex",
//   async (body) => {
//     try {
//       const response = await axiosInstance.put(`api-doc/reorder`, body, {
//         headers: { ...authHeader() },
//       });
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
//       const response = await axiosInstance.post(`api-doc`, body, {
//         headers: { ...authHeader() },
//       });
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
    setCommonState: (state, action) => {
      state[action.payload.stateName] = action.payload.data;
    },
    resetCommonStates: () => initialState,
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

export const { setCommonState ,resetCommonStates} = commonStateSlice.actions;
export default commonStateSlice.reducer;
