import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import authSlice from "./ApiSlice/authSlice";
import commonStateSlice from "./ApiSlice/commonStateSlice";
import productSlice from "./ApiSlice/productSlice";
import cartSlice from "./ApiSlice/cartSlice";

// All reducers are combined here
const reducers = combineReducers({
  auth: authSlice,
  commonStates: commonStateSlice,
  products: productSlice,
  cart: cartSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "commonStates", "products", "cart"], // This is the list of reducers that you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducers);

// check if the environment is production
const isProd = window?.location?.href?.includes("yourdomain.com"); 

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
  devTools: isProd ? false : true,  // disable redux devtools in production
});

export const persistor = persistStore(store);
export default store;
