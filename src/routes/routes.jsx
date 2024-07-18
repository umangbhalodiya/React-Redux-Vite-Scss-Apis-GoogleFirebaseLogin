import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import { Protectedroute } from "./protectedroute";
import Cart from "./Cart";
import DefaultPage from "../Components/DefaultPage/DefaultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultPage>
        <Home />
      </DefaultPage>
    ),
  },
  {
    path: "/products",
    element: (
      <DefaultPage>
        <Products />
      </DefaultPage>
    ),
  },
  {
    path: "/cart",
    element: (
      <Protectedroute>
        <DefaultPage>
          <Cart />
        </DefaultPage>
      </Protectedroute>
    ),
  },
]);

export default router;
