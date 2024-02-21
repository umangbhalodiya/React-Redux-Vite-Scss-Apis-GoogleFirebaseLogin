import { Home, LogIn, ShoppingBag, ShoppingCart } from "react-feather";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const location = useLocation();
  console.log("location", location);

  return (
    <div className="products_header">
      <div
        className={`header_item ${location.pathname === "/" ? "active" : ""}`}
        onClick={() => {
          navigate("/");
        }}
      >
        Home <Home size={18} />
      </div>
      <div
        className={`header_item ${
          location.pathname === "/products" ? "active" : ""
        }`}
        onClick={() => {
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
          navigate("/login");
        }}
      >
        Login <LogIn size={18} />
      </div>
    </div>
  );
};

export default Header;
