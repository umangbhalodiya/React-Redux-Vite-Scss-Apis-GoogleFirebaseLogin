import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { adminHeader, authHeader, setSession } from "../../helpers/authHelper";

const initialState = {
  user: null,
  userData: null,
  isLoggedIn: false,
  errorSignIn: false,
  status: "idle",
  error: null,
  isVisitor: false,
  visitingUser: null,
};

export const signUp = createAsyncThunk(
  "/authentication/signup",
  async (body) => {
    try {
      const response = await axiosInstance.post(`user/signup`, body);
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

export const googleLogin = createAsyncThunk(
  "/authentication/googleLogin",
  async (token) => {
    try {
      const response = await axiosInstance.post(
        `user/signup`,
        {},
        {
          headers: {
            ...authHeader(),
            "firebase-token": token,
          },
        }
      );
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

export const viewDashboard = createAsyncThunk(
  "/authentication/viewDashboard",
  async (body) => {
    try {
      const response = await axiosInstance.post(`user/signin `, body, {
        headers: authHeader(),
      });
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

export const backToDashboard = createAsyncThunk(
  "/authentication/backToDashboard",
  async (body) => {
    try {
      const response = await axiosInstance.post(
        `user/signin `,
        { adminId: body?.adminId },
        {
          headers: {
            ...adminHeader(),
            Authorization: "Bearer " + body.token,
          },
        }
      );
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);
export const logIn = createAsyncThunk("/authentication/login", async (body) => {
  try {
    const response = await axiosInstance.post(`user/signin`, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});

export const getUser = createAsyncThunk(
  "/authentication/getUser",
  async (body) => {
    try {
      const response = await axiosInstance.get(`user`, body);
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "/authentication/verifyEmail",
  async (body) => {
    try {
      const response = await axiosInstance.post(
        `userService/user/send-email`,
        body
      );
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "/authentication/verifyOtp",
  async (body) => {
    try {
      const response = await axiosInstance.post(`user/verify-otp`, body);
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "/authentication/forgotPassword",
  async (body) => {
    try {
      const response = await axiosInstance.put(`user/forgot-password`, body);
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

export const setSessionData = (token, userInfo) => {
  const sessionData = {
    access_token: token,
    userInfo: userInfo,
  };
  setSession(sessionData);
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetAuth: (state) => initialState,
    setUpdatedUser(state, action) {
      state.user = action.payload;
    },

    setAutoLogin(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.status = "succeeded";
      state.error = null;
    },

    setVisitor: (state, action) => {
      state.visitingUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        const token = action?.payload?.payload?.token;
        let userInfo = {
          ...action?.payload?.payload,
          accessToken: token,
          refreshToken: token,
          role: action?.payload?.payload?.role,
          fullName:
            action?.payload?.payload?.firstName +
            " " +
            action?.payload?.payload?.lastName,
        };
        if (token) {
          state.isVisitor = false;
          state.visitingUser = action?.payload?.payload;
          state.user = userInfo;
          state.isLoggedIn = true;
          state.userData = userInfo;
          state.status = "succeeded";
          setSessionData(token, userInfo);
          localStorage.setItem("userData", JSON.stringify(userInfo));
          localStorage.setItem("accessToken", JSON.stringify(token));
          localStorage.setItem("refreshToken", JSON.stringify(token));
          localStorage.setItem("serviceType", "VT");
        }
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(logIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const token = action?.payload?.payload?.token;
        let userInfo = {
          ...action?.payload?.payload,
          accessToken: token,
          refreshToken: token,
          role: action?.payload?.payload?.role,
          fullName:
            action?.payload?.payload?.firstName +
            " " +
            action?.payload?.payload?.lastName,
        };
        if (token) {
          state.isVisitor = false;
          state.visitingUser = action?.payload?.payload;
          state.userData = userInfo;
          state.isLoggedIn = true;
          state.user = userInfo;
          state.status = "succeeded";
          setSessionData(token, userInfo);
          localStorage.setItem("userData", JSON.stringify(userInfo));
          localStorage.setItem("currUser", JSON.stringify(userInfo));
          localStorage.setItem("accessToken", JSON.stringify(token));
          localStorage.setItem("refreshToken", JSON.stringify(token));
          if (action?.payload?.payload?.subRole) {
            localStorage.setItem("serviceType", "WP");
          } else {
            localStorage.setItem("serviceType", "VT");
          }
        }
      })
      .addCase(logIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(googleLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        const token = action?.payload?.payload?.token;
        let userInfo = {
          ...action?.payload?.payload,
          accessToken: token,
          refreshToken: token,
          role: action?.payload?.payload?.role,
          fullName:
            action?.payload?.payload?.firstName +
            " " +
            action?.payload?.payload?.lastName,
        };
        if (token) {
          state.isVisitor = false;
          state.visitingUser = action?.payload?.payload;
          state.userData = userInfo;
          state.isLoggedIn = true;
          state.user = userInfo;
          state.status = "succeeded";
          setSessionData(token, userInfo);
          localStorage.setItem("userData", JSON.stringify(userInfo));
          localStorage.setItem("currUser", JSON.stringify(userInfo));
          localStorage.setItem("accessToken", JSON.stringify(token));
          localStorage.setItem("refreshToken", JSON.stringify(token));
          if (action?.payload?.payload?.subRole) {
            localStorage.setItem("serviceType", "WP");
          } else {
            localStorage.setItem("serviceType", "VT");
          }
        }
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(viewDashboard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(viewDashboard.fulfilled, (state, action) => {
        const token = action?.payload?.payload?.token;
        let userInfo = {
          ...action?.payload?.payload,
          accessToken: token,
          refreshToken: token,
          role: action?.payload?.payload?.role,
          fullName:
            action?.payload?.payload?.firstName +
            " " +
            action?.payload?.payload?.lastName,
        };
        if (token) {
          state.isVisitor = true;
          state.userData = userInfo;
          state.isLoggedIn = true;
          state.user = userInfo;
          state.status = "succeeded";
          setSessionData(token, userInfo);
          localStorage.setItem("userData", JSON.stringify(userInfo));
          localStorage.setItem("accessToken", JSON.stringify(token));
          localStorage.setItem("refreshToken", JSON.stringify(token));
          localStorage.setItem("serviceType", "VT");
        }
      })
      .addCase(viewDashboard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(backToDashboard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(backToDashboard.fulfilled, (state, action) => {
        const token = action?.payload?.payload?.token;
        let userInfo = {
          ...action?.payload?.payload,
          accessToken: token,
          refreshToken: token,
          role: action?.payload?.payload?.role,
          fullName:
            action?.payload?.payload?.firstName +
            " " +
            action?.payload?.payload?.lastName,
        };
        if (token) {
          state.isVisitor = false;
          state.visitingUser = action?.payload?.payload;
          state.userData = userInfo;
          state.isLoggedIn = true;
          state.user = userInfo;
          state.status = "succeeded";
          setSessionData(token, userInfo);
          localStorage.setItem("userData", JSON.stringify(userInfo));
          localStorage.setItem("accessToken", JSON.stringify(token));
          localStorage.setItem("refreshToken", JSON.stringify(token));
          localStorage.setItem("serviceType", "VT");
        }
      })
      .addCase(backToDashboard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(verifyEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(verifyOtp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(forgotPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  resetAuth,
  setUpdatedUser,
  setAutoLogin,
  setVisitor,
  setBackToDashboard,
} = authSlice.actions;
export default authSlice.reducer;
