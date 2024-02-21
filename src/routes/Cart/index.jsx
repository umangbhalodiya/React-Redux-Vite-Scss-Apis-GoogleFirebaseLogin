import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import { Star, Trash2 } from "react-feather";
import Header from "../../Components/Header";
import { setCartData } from "../../store/ApiSlice/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCartItem = (prod) => {
    console.log("prod", prod);
    let cart = cartItems.filter((item) => item.id !== prod.id);
    console.log("object", cart);
    dispatch(setCartData({ stateName: "cartItems", data: cart }));
    toast.success("Product removed from cart");
  };

  return (
    <div className="cart_section">
      <Header />
      <Toaster />
      <div className="cart_items">
        {cartItems?.length > 0 ? (
          cartItems?.map((item) => {
            return (
              <div key={item.id} className="cart_item">
                <img src={item?.image} />

                <div className="cart_item_detail">
                  <div
                    className="item_title"
                    onClick={() => {
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
