import { useDispatch, useSelector } from "react-redux";
import "./productDetails.scss";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "react-feather";
import { setCartData } from "../../store/ApiSlice/cartSlice";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!singleProduct.id) {
      navigate("/products");
    }
  }, [singleProduct]);

  const addToCart = (item) => {
    // check if the product is already in cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      toast.success("Product Already in Cart.", {
        position: "top-right",
      });
    } else {
      // if product is not in cart then add the product to cart
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
    <div className="productpage_section">
      {/* <Header /> */}
      <Toaster />
      <div className="productItem">
        <div className="product-img">
          <img src={product?.image} />
        </div>

        <div className="all-product-details">
          <h4>{product?.title}</h4>
          <div className="prodct-price-alignment ">
            <h6>{product?.price}</h6>
          </div>
          <div className="product-description-alignment">
            <p>{product?.description}</p>
          </div>
          <div className="product-button-alignment">
            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              Add <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
