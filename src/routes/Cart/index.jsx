import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import { Star, Trash2 } from "react-feather";
import Header from "../../Components/Header";
import { setCartData } from "../../store/ApiSlice/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  // get cart items from redux store
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // remove cart item from redux store
  const removeCartItem = (prod) => {
    let cart = cartItems.filter((item) => item.id !== prod.id); // filter the cart items and remove the selected product
    dispatch(setCartData({ stateName: "cartItems", data: cart })); // set the updated cart items to redux store
    toast.success("Product removed from cart", {
      position: "top-right",
    });
  };

  return (
    <div className="cart_section">
      <Header />
      <Toaster />
      <div className="cart_items">
        {cartItems?.length > 0 ? (
          cartItems?.map((item, i) => {
            return (
              <div key={i} className="cart_item">
                <img src={item?.image} />
                <div className="cart_item_detail">
                  <div
                    className="item_title"
                    onClick={() => {
                      // remove the product from cart
                      removeCartItem(item);
                    }}
                  >
                    {item?.title} <Trash2 className="icon" color="red" />
                  </div>
                  <div className="item_price">${item?.price}</div>
                  <div className="item_description">{item?.description}</div>
                  <div className="item_rating">
                    <Star color="#003d4e" /> {item?.rating?.rate}
                    <small> ({item?.rating?.count})</small>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty_cart">Cart is Empty</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
