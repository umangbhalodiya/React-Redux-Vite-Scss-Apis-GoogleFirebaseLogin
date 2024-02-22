import { useDispatch, useSelector } from "react-redux";
import { getProducts, setProductData } from "../../store/ApiSlice/productSlice";
import { useEffect } from "react";
import "./products.scss";
import { ShoppingCart } from "react-feather";
import { setCartData } from "../../store/ApiSlice/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // get products from redux store
  const { products } = useSelector((state) => state.products);
  // get cart items from redux store
  const { cartItems } = useSelector((state) => state.cart);

  // get products from api
  useEffect(() => {
    // calling the getProducts action to get the products from api
    dispatch(getProducts());
  }, []);

  // add to cart function to add the product to cart
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
    <div className="products_section">
      <Toaster />
      <Header />
      <div className="list_products">
        {products?.length > 0 &&
          products?.map((item, i) => {
            return (
              <div className="product_item" key={i}>
                <img
                  src={item?.image}
                  onClick={() => {
                    // set the selected product to redux store
                    dispatch(
                      setProductData({ stateName: "singleProduct", data: item })
                    );
                    // navigate to product details page
                    navigate(`/products/${item.id}`);
                  }}
                />
                <div className="product_name">
                  <h3>{item?.title}</h3>
                  <h4>${item?.price}</h4>
                </div>
                <h6>{item?.description}</h6>
                <button
                  onClick={() => {
                    addToCart(item); // add product to cart
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
