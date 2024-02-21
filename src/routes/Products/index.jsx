import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/ApiSlice/productSlice";
import { useEffect } from "react";
import "./products.scss";
import { Home, ShoppingCart } from "react-feather";
import { useNavigate } from "react-router";
import { setCartData } from "../../store/ApiSlice/cartSlice";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import Header from "../../Components/Header";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      toast.success("Product Already in Cart.", {
        position: "top-right",
      });
    } else {
      dispatch(
        setCartData({
          stateName: "cartItems",
          data: [...cartItems, item],
        })
      );
      toast.success("Product Added to Cart.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="products_section">
      <Toaster />
      <Header />
      <div className="list_products">
        {products?.length > 0 &&
          products?.map((item, i) => {
            return (
              <div className="product_item" key={i}>
                <img src={item.image} />
                <div className="product_name">
                  <h3>{item?.title}</h3>
                  <h4>${item?.price}</h4>
                </div>
                <h6>{item?.description}</h6>
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  Add <ShoppingCart size={18} />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
