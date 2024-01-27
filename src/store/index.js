import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import authSlice from "./ApiSlice/authSlice";
import commonStateSlice from "./ApiSlice/commonStateSlice";

const reducers = combineReducers({
  auth: authSlice,
  commonStates: commonStateSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "commonStates"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const isProd = window?.location?.href?.includes("app.vtalkz.com");

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: isProd ? false : true,
});

export const persistor = persistStore(store);
export default store;
