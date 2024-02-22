import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/ApiSlice/productSlice";
import { useEffect, useState } from "react";
import "./products.scss";
import { ShoppingCart } from "react-feather";
import { setCartData } from "../../store/ApiSlice/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../Components/Header";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";

const Products = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(false);
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
      <div className="list-product-all-details">
        <div className="container">
          <div className="list_products">
            {products?.length > 0 &&
              products?.map((item, i) => {
                return (
                  <div className="product_item" key={i}>
                    <div
                      className="product-img"
                      onClick={() => setProduct({ ...item, modal: true })}
                    >
                      <img src={item?.image} />
                    </div>
                    <div className="product-all-details">
                      <div className="product_name">
                        <h3>{item?.title}</h3>
                        <div className="product-price">
                          <h4>${item?.price}</h4>
                        </div>
                      </div>
                      <div className="product-description">
                        <p>{item?.description}</p>
                      </div>
                    </div>
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
      </div>
      <ProductDetailsModal product={product} setProduct={setProduct} />
    </div>
  );
};

export default Products;
