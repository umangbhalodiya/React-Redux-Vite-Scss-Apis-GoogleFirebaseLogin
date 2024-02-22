import { LogIn, ShoppingBag, ShoppingCart } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import "./header.scss";
import { Logout } from "../../store/ApiSlice/authSlice";
import { setCartData } from "../../store/ApiSlice/cartSlice";
import Logo from "../../assets/shopnow.png";

const Header = () => {
  // get cart items from redux store
  const { cartItems } = useSelector((state) => state.cart);

  // get current location to set active class on header items
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="container">
        <div className="products_header">
          <img src={Logo} />

          <div className="header-center-item">
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
          </div>
          <div
            className={`header_item ${
              location.pathname === "/login" ? "active" : ""
            }`}
            onClick={() => {
              // redirect to login page and user states will be reset to initial state
              dispatch(Logout());
              // setting cart items to empty array comment below line for not to clear cart items on logout
              dispatch(setCartData({ stateName: "cartItems", data: [] }));
              // redirect to login page
              navigate("/");
            }}
          >
            Logout <LogIn size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
