import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import { Protectedroute } from "./protectedroute";
import Cart from "./Cart";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
