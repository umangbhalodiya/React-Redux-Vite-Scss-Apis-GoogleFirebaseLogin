import { LogIn, ShoppingBag, ShoppingCart } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import "./header.scss";
import { Logout } from "../../store/ApiSlice/authSlice";

const Header = () => {
  // get cart items from redux store
  const { cartItems } = useSelector((state) => state.cart);

  // get current location to set active class on header items
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="products_header">
      <div
        className={`header_item ${
          location.pathname === "/products" ? "active" : ""
        }`}
        onClick={() => {
          // redirect to products page
          navigate("/products");
        }}
      >
        Products <ShoppingBag size={18} />{" "}
      </div>
      <div
        className={`header_item ${
          location.pathname === "/cart" ? "active" : ""
        }`}
        onClick={() => {
          // redirect to cart page
          navigate("/cart");
        }}
      >
        Cart <ShoppingCart size={18} />{" "}
        {cartItems?.length > 0 && cartItems?.length}
      </div>
      <div
        className={`header_item ${
          location.pathname === "/login" ? "active" : ""
        }`}
        onClick={() => {
          // redirect to login page and user states will be reset to initial state
          dispatch(Logout());
          navigate("/");
        }}
      >
        Logout <LogIn size={18} />
      </div>
    </div>
  );
};

export default Header;
