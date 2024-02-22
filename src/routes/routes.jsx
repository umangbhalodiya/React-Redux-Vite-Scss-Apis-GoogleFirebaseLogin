import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import { Protectedroute } from "./protectedroute";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

// all routes are defined here including protected routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: (
      <Protectedroute>
        <Products />
      </Protectedroute>
    ),
  },
  {
    path: "/cart",
    element: (
      <Protectedroute>
        <Cart />
      </Protectedroute>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <Protectedroute>
        <ProductDetails />
      </Protectedroute>
    ),
  },
]);

export default router;
